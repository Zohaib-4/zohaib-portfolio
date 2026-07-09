from fastapi import APIRouter

from app.schemas.certification import Certification
from app.services import content

router = APIRouter(tags=["certifications"])


@router.get("/api/certifications")
def get_certifications() -> list[Certification]:
    return content.CERTIFICATIONS
