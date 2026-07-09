import json
from pathlib import Path
from typing import Any

from app.schemas.certification import Certification
from app.schemas.experience import Experience
from app.schemas.profile import Profile
from app.schemas.project import Project
from app.schemas.skill import SkillGroup

CONTENT_DIR = Path(__file__).resolve().parent.parent / "content"


def _load_json(filename: str) -> Any:
    with (CONTENT_DIR / filename).open() as f:
        return json.load(f)


PROFILE: Profile = Profile.model_validate(_load_json("profile.json"))
EXPERIENCE: list[Experience] = [
    Experience.model_validate(item) for item in _load_json("experience.json")
]
PROJECTS: list[Project] = [
    Project.model_validate(item) for item in _load_json("projects.json")
]
SKILLS: list[SkillGroup] = [
    SkillGroup.model_validate(item) for item in _load_json("skills.json")
]
CERTIFICATIONS: list[Certification] = [
    Certification.model_validate(item) for item in _load_json("certifications.json")
]
