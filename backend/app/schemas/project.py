from pydantic import BaseModel, HttpUrl


class Project(BaseModel):
    slug: str
    name: str
    subtitle: str
    stack: list[str]
    highlights: list[str]
    metrics: list[str] = []
    repo_url: HttpUrl | None = None
    live_url: HttpUrl | None = None
