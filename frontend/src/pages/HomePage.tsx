import { TopNav } from '../components/layout/TopNav'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Work } from '../components/sections/Work'
import { About } from '../components/sections/About'
import { Toolbox } from '../components/sections/Toolbox'
import { Contact } from '../components/sections/Contact'
import { TimeZoneBridge } from '../components/TimeZoneBridge'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function HomePage() {
  useScrollReveal()

  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Work />
        <About />
        <Toolbox />
        <Contact />
      </main>
      <TimeZoneBridge />
      <Footer />
    </>
  )
}
