from collections.abc import AsyncIterator
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi.errors import RateLimitExceeded

from app.config import settings
from app.db.session import init_db
from app.rate_limit import limiter
from app.routers import (
    certifications,
    contact,
    experience,
    health,
    profile,
    projects,
    resume,
    skills,
)
from app.schemas.common import ErrorDetail, ErrorEnvelope
from app.services.email import EmailSendFailed
from app.services.spam import SpamCheckFailed


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    init_db()
    yield


app = FastAPI(title="Zohaib Portfolio API", lifespan=lifespan)
app.state.limiter = limiter

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


def _envelope(error: str, message: str, status: int) -> JSONResponse:
    body = ErrorEnvelope(
        error=error, detail=[ErrorDetail(message=message)], status=status
    )
    return JSONResponse(status_code=status, content=body.model_dump())


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(
    request: Request, exc: RequestValidationError
) -> JSONResponse:
    return _envelope("validation_error", str(exc), 422)


@app.exception_handler(RateLimitExceeded)
async def rate_limit_exception_handler(
    request: Request, exc: RateLimitExceeded
) -> JSONResponse:
    return _envelope("rate_limited", "Too many requests, please try again later.", 429)


@app.exception_handler(SpamCheckFailed)
async def spam_exception_handler(
    request: Request, exc: SpamCheckFailed
) -> JSONResponse:
    return _envelope("spam_detected", "Submission rejected.", 400)


@app.exception_handler(EmailSendFailed)
async def email_exception_handler(
    request: Request, exc: EmailSendFailed
) -> JSONResponse:
    return _envelope("email_delivery_failed", "Could not send message.", 502)


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
    return _envelope("http_error", str(exc.detail), exc.status_code)


app.include_router(health.router)
app.include_router(profile.router)
app.include_router(experience.router)
app.include_router(projects.router)
app.include_router(skills.router)
app.include_router(certifications.router)
app.include_router(contact.router)
app.include_router(resume.router)
