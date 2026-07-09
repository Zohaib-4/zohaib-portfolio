from pydantic import BaseModel


class Experience(BaseModel):
    company: str
    role: str
    location: str
    start: str
    end: str | None = None
    highlights: list[str]
