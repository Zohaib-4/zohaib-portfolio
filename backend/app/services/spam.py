import httpx

from app.config import settings

TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify"


class SpamCheckFailed(Exception):
    def __init__(self, reason: str) -> None:
        self.reason = reason
        super().__init__(reason)


async def verify_submission(honeypot: str, turnstile_token: str) -> None:
    if honeypot:
        raise SpamCheckFailed("honeypot")

    if not settings.turnstile_secret:
        return

    async with httpx.AsyncClient(timeout=5.0) as client:
        response = await client.post(
            TURNSTILE_VERIFY_URL,
            data={"secret": settings.turnstile_secret, "response": turnstile_token},
        )
    if not response.json().get("success"):
        raise SpamCheckFailed("turnstile")
