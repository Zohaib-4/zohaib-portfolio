// Curated site copy, hand-authored to tell a story, not a generic CMS schema.
// Kept in one place only where the same fact (name, email, social links) is
// reused across several components; section-specific narrative copy lives
// directly in each section component.

export const PROFILE = {
  name: 'Muhammad Zohaib',
  email: 'm.zohaib6363@gmail.com',
  github: 'https://github.com/Zohaib-4',
  linkedin: 'https://linkedin.com/in/m-zohaib04',
  resume: '/resume.pdf',
} as const

export const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'toolbox', label: 'Toolbox' },
  { id: 'contact', label: 'Contact' },
] as const
