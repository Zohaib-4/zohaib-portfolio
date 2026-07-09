export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface Education {
  institution: string
  degree: string
  location: string
  graduated: string
  coursework: string[]
}

export interface Profile {
  name: string
  headline: string
  summary: string
  location: string
  email: string
  socials: SocialLink[]
  education: Education
}
