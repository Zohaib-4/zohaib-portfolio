from pydantic import BaseModel, HttpUrl


class Certification(BaseModel):
    name: str
    issuer: str
    issued: str
    expires: str | None = None
    credential_id: str | None = None
    credential_url: HttpUrl | None = None
