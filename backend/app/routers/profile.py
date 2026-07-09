from fastapi import APIRouter

from app.schemas.profile import Profile
from app.services import content

router = APIRouter(tags=["profile"])


@router.get("/api/profile")
def get_profile() -> Profile:
    return content.PROFILE
