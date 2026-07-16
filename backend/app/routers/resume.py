from pathlib import Path

from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse
from sqlmodel import Session

from app.db.session import get_session
from app.services import analytics

router = APIRouter(tags=["resume"])

RESUME_PATH = Path(__file__).resolve().parent.parent / "static" / "resume.pdf"


@router.get("/api/resume")
def get_resume(session: Session = Depends(get_session)) -> FileResponse:
    if not RESUME_PATH.exists():
        raise HTTPException(status_code=404, detail="Résumé not found")
    analytics.record_download(session)
    return FileResponse(
        RESUME_PATH,
        media_type="application/pdf",
        filename="Muhammad-Zohaib-Resume.pdf",
    )
