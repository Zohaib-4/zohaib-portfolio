const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export interface ContactFormPayload {
  name: string
  email: string
  message: string
  botcheck: string
}

interface Web3FormsResponse {
  success: boolean
  message: string
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<void> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      ...payload,
    }),
  })

  const result = (await response.json().catch(() => undefined)) as
    Web3FormsResponse | undefined

  if (!response.ok || !result?.success) {
    throw new Error(result?.message ?? 'Failed to send message.')
  }
}
