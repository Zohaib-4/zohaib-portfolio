from sqlmodel import Session

from app.db.models import DownloadEvent


def record_download(session: Session) -> None:
    session.add(DownloadEvent())
    session.commit()
