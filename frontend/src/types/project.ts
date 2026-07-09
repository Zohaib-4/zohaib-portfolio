export interface Project {
  slug: string
  name: string
  subtitle: string
  stack: string[]
  highlights: string[]
  metrics: string[]
  repo_url: string | null
  live_url: string | null
}
