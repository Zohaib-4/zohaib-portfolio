import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'
import { Contact } from '../components/sections/Contact'
import { useResource } from '../hooks/useResource'
import { endpoints } from '../services/endpoints'
import {
  profileSnapshot,
  experienceSnapshot,
  projectsSnapshot,
  skillsSnapshot,
} from '../data'

export function HomePage() {
  const profile = useResource(endpoints.profile, profileSnapshot).data
  const experience = useResource(endpoints.experience, experienceSnapshot).data
  const projects = useResource(endpoints.projects, projectsSnapshot).data
  const skills = useResource(endpoints.skills, skillsSnapshot).data

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
