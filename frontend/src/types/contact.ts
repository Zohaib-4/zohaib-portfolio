export interface ContactPayload {
  name: string
  email: string
  message: string
  company: string
  turnstile_token: string
}

export interface ContactResult {
  ok: boolean
  id: string
  message: string
}

export interface ErrorDetail {
  field: string | null
  message: string
}

export interface ErrorEnvelope {
  error: string
  detail: ErrorDetail[]
  status: number
}
