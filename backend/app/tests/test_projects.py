from fastapi.testclient import TestClient


def test_list_projects(client: TestClient) -> None:
    response = client.get("/api/projects")

    assert response.status_code == 200
    slugs = {project["slug"] for project in response.json()}
    assert slugs == {"shepherd", "lighthouse", "virtual-doctor"}


def test_get_project_by_slug(client: TestClient) -> None:
    response = client.get("/api/projects/lighthouse")

    assert response.status_code == 200
    assert response.json()["name"] == "Lighthouse"


def test_get_project_missing_slug_returns_404(client: TestClient) -> None:
    response = client.get("/api/projects/does-not-exist")

    assert response.status_code == 404
