from fastapi import APIRouter, Depends, Request
from sqlmodel import Session

from app.db.models import ContactMessage
from app.db.session import get_session
from app.rate_limit import limiter
from app.schemas.contact import ContactPayload, ContactResult
from app.services import email, spam

router = APIRouter(tags=["contact"])


@router.post("/api/contact", status_code=201)
@limiter.limit("5/minute")
async def submit_contact(
    request: Request,
    payload: ContactPayload,
    session: Session = Depends(get_session),
) -> ContactResult:
    await spam.verify_submission(payload.company, payload.turnstile_token)

    record = ContactMessage(
        name=payload.name, email=payload.email, message=payload.message
    )
    session.add(record)
    session.commit()
    session.refresh(record)

    await email.send_contact_email(payload.name, payload.email, payload.message)

    return ContactResult(ok=True, id=str(record.id))
