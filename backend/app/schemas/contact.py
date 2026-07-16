from pydantic import BaseModel, EmailStr, Field


class ContactPayload(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=5000)
    company: str = Field(default="", max_length=200)
    turnstile_token: str = ""


class ContactResult(BaseModel):
    ok: bool
    id: str
    message: str = "Thanks — I'll get back to you soon."
