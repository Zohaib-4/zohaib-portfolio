from fastapi import APIRouter, HTTPException

from app.schemas.project import Project
from app.services import content

router = APIRouter(tags=["projects"])


@router.get("/api/projects")
def list_projects() -> list[Project]:
    return content.PROJECTS


@router.get("/api/projects/{slug}")
def get_project(slug: str) -> Project:
    for project in content.PROJECTS:
        if project.slug == slug:
            return project
    raise HTTPException(status_code=404, detail=f"Project '{slug}' not found")
