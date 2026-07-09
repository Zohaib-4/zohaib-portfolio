import certificationsJson from './certifications.json'
import experienceJson from './experience.json'
import profileJson from './profile.json'
import projectsJson from './projects.json'
import skillsJson from './skills.json'
import type {
  Certification,
  Experience,
  Profile,
  Project,
  SkillGroup,
} from '../types'

export const profileSnapshot = profileJson as Profile
export const experienceSnapshot = experienceJson as Experience[]
export const projectsSnapshot = projectsJson as Project[]
export const skillsSnapshot = skillsJson as SkillGroup[]
export const certificationsSnapshot = certificationsJson as Certification[]
