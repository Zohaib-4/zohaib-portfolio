import type { ErrorEnvelope } from '../types'

export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? ''

export const isApiConfigured = API_BASE_URL !== ''

export class ApiError extends Error {
  envelope?: ErrorEnvelope

  constructor(message: string, envelope?: ErrorEnvelope) {
    super(message)
    this.envelope = envelope
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`)
  if (!response.ok) {
    throw new Error(`GET ${path} failed with status ${response.status}`)
  }
  return response.json() as Promise<T>
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const envelope = (await response.json().catch(() => undefined)) as
      ErrorEnvelope | undefined
    throw new ApiError(
      envelope?.detail[0]?.message ??
        `POST ${path} failed with status ${response.status}`,
      envelope,
    )
  }

  return response.json() as Promise<T>
}
