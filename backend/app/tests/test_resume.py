from fastapi.testclient import TestClient
from sqlalchemy import Engine
from sqlmodel import Session, select

from app.db.models import DownloadEvent


def test_resume_download_headers_and_content(client: TestClient) -> None:
    response = client.get("/api/resume")

    assert response.status_code == 200
    assert response.headers["content-type"] == "application/pdf"
    assert "Muhammad-Zohaib-Resume.pdf" in response.headers["content-disposition"]
    assert len(response.content) > 0


def test_resume_download_records_event(client: TestClient, db_engine: Engine) -> None:
    client.get("/api/resume")
    client.get("/api/resume")

    with Session(db_engine) as session:
        events = session.exec(select(DownloadEvent)).all()

    assert len(events) == 2
