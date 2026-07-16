from pydantic import BaseModel


class ErrorDetail(BaseModel):
    field: str | None = None
    message: str


class ErrorEnvelope(BaseModel):
    error: str
    detail: list[ErrorDetail]
    status: int
