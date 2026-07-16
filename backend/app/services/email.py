import httpx

from app.config import settings

RESEND_API_URL = "https://api.resend.com/emails"


class EmailSendFailed(Exception):
    pass


async def send_contact_email(name: str, email: str, message: str) -> None:
    if not settings.resend_api_key:
        return

    async with httpx.AsyncClient(timeout=5.0) as client:
        response = await client.post(
            RESEND_API_URL,
            headers={"Authorization": f"Bearer {settings.resend_api_key}"},
            json={
                "from": settings.contact_from_email,
                "to": [settings.contact_to_email],
                "reply_to": email,
                "subject": f"Portfolio contact from {name}",
                "text": message,
            },
        )
    if response.status_code >= 400:
        raise EmailSendFailed(response.text)
