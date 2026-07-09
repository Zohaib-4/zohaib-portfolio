from fastapi import APIRouter

from app.schemas.experience import Experience
from app.services import content

router = APIRouter(tags=["experience"])


@router.get("/api/experience")
def get_experience() -> list[Experience]:
    return content.EXPERIENCE
