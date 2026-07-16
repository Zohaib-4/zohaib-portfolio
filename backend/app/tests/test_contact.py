from unittest.mock import AsyncMock, MagicMock

import pytest
from fastapi.testclient import TestClient


def _payload(**overrides: object) -> dict[str, object]:
    base: dict[str, object] = {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "message": "Hello, I'd like to work with you on a project.",
        "company": "",
        "turnstile_token": "",
    }
    base.update(overrides)
    return base


def test_contact_success(client: TestClient, monkeypatch: pytest.MonkeyPatch) -> None:
    mock_send = AsyncMock()
    monkeypatch.setattr("app.routers.contact.email.send_contact_email", mock_send)

    response = client.post("/api/contact", json=_payload())

    assert response.status_code == 201
    body = response.json()
    assert body["ok"] is True
    assert "id" in body
    mock_send.assert_awaited_once()


def test_contact_rejects_honeypot(client: TestClient) -> None:
    response = client.post("/api/contact", json=_payload(company="I am a bot"))

    assert response.status_code == 400
    assert response.json()["error"] == "spam_detected"


def test_contact_rejects_failed_turnstile(
    client: TestClient, monkeypatch: pytest.MonkeyPatch
) -> None:
    monkeypatch.setattr("app.config.settings.turnstile_secret", "secret")
    mock_response = MagicMock()
    mock_response.json.return_value = {"success": False}

    class _FakeAsyncClient:
        def __init__(self, *args: object, **kwargs: object) -> None:
            pass

        async def __aenter__(self) -> "_FakeAsyncClient":
            return self

        async def __aexit__(self, *args: object) -> None:
            return None

        async def post(self, *args: object, **kwargs: object) -> MagicMock:
            return mock_response

    monkeypatch.setattr("app.services.spam.httpx.AsyncClient", _FakeAsyncClient)

    response = client.post("/api/contact", json=_payload(turnstile_token="bad"))

    assert response.status_code == 400
    assert response.json()["error"] == "spam_detected"


def test_contact_validation_error(client: TestClient) -> None:
    response = client.post("/api/contact", json=_payload(email="not-an-email"))

    assert response.status_code == 422
    assert response.json()["error"] == "validation_error"


def test_contact_rate_limited(
    client: TestClient, monkeypatch: pytest.MonkeyPatch
) -> None:
    mock_send = AsyncMock()
    monkeypatch.setattr("app.routers.contact.email.send_contact_email", mock_send)

    for _ in range(5):
        response = client.post("/api/contact", json=_payload())
        assert response.status_code == 201

    response = client.post("/api/contact", json=_payload())

    assert response.status_code == 429
    assert response.json()["error"] == "rate_limited"
