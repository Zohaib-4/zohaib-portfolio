from app.services import content


def test_profile_validates() -> None:
    assert content.PROFILE.name == "Muhammad Zohaib"


def test_experience_validates() -> None:
    assert len(content.EXPERIENCE) == 2
    assert content.EXPERIENCE[0].end is None


def test_projects_validate() -> None:
    slugs = {project.slug for project in content.PROJECTS}
    assert slugs == {"shepherd", "lighthouse", "virtual-doctor"}


def test_skills_validate() -> None:
    categories = [group.category for group in content.SKILLS]
    assert categories == [
        "Languages",
        "Frameworks & Libraries",
        "Cloud & DevOps",
        "Databases",
        "AI & ML",
        "Observability",
        "Productivity",
    ]


def test_certifications_validate() -> None:
    assert content.CERTIFICATIONS == []
