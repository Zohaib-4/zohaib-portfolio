from fastapi.testclient import TestClient


def test_get_profile(client: TestClient) -> None:
    response = client.get("/api/profile")

    assert response.status_code == 200
    body = response.json()
    assert body["name"] == "Muhammad Zohaib"
    assert body["email"] == "m.zohaib6363@gmail.com"
