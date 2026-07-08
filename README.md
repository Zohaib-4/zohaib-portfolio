# Zohaib Portfolio

Personal portfolio — React (Vite) frontend + FastAPI backend. See [`EXECUTION_PLAN.md`](./EXECUTION_PLAN.md) for the full architecture and phased build plan; content is sourced from [`resume.md`](./resume.md).

## Prerequisites

- Node.js 20+ and npm
- Python 3.12+ and [`uv`](https://docs.astral.sh/uv/)
- [`pre-commit`](https://pre-commit.com/) (`uv tool install pre-commit`)

## Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run format
npm run build
```

## Backend

```bash
cd backend
uv sync
uv run uvicorn app.main:app --reload   # http://localhost:8000
uv run ruff check .
uv run ruff format .
uv run mypy app
uv run pytest
```

`GET /api/health` returns `{"status": "ok"}`.

Copy `backend/.env.example` to `backend/.env` and `frontend/.env.example` to `frontend/.env` and fill in values as needed.

## Pre-commit hooks

```bash
uv tool install pre-commit
pre-commit install
```

Runs Ruff (lint + format) and mypy on the backend, and ESLint + Prettier on the frontend, on every commit.