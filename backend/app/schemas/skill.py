from pydantic import BaseModel


class SkillGroup(BaseModel):
    category: str
    items: list[str]
