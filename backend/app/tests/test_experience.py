from fastapi.testclient import TestClient


def test_list_experience(client: TestClient) -> None:
    response = client.get("/api/experience")

    assert response.status_code == 200
    body = response.json()
    assert len(body) == 2
    assert body[0]["company"] == "Techleadz"
