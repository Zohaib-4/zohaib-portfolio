from fastapi import APIRouter

from app.schemas.skill import SkillGroup
from app.services import content

router = APIRouter(tags=["skills"])


@router.get("/api/skills")
def get_skills() -> list[SkillGroup]:
    return content.SKILLS
