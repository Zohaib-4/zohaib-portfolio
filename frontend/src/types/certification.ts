export interface Certification {
  name: string
  issuer: string
  issued: string
  expires: string | null
  credential_id: string | null
  credential_url: string | null
}
