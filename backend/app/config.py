from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    allowed_origins: list[str] = ["http://localhost:5173"]
    database_url: str = "sqlite:///./app.db"

    resend_api_key: str = ""
    contact_to_email: str = ""
    contact_from_email: str = ""
    turnstile_secret: str = ""


settings = Settings()
