from pydantic import BaseModel, EmailStr, HttpUrl


class SocialLink(BaseModel):
    label: str
    url: HttpUrl
    icon: str


class Education(BaseModel):
    institution: str
    degree: str
    location: str
    graduated: str
    coursework: list[str]


class Profile(BaseModel):
    name: str
    headline: str
    summary: str
    location: str
    email: EmailStr
    socials: list[SocialLink]
    education: Education
