import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Organizations } from "@/components/portfolio/organizations"
import { Education } from "@/components/portfolio/education"
import { Certifications } from "@/components/portfolio/certifications"
import { Skills } from "@/components/portfolio/skills"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Projects />
        <Experience />
        <Organizations />
        <Education />
        <Certifications />
        <Skills />
        <Footer />
      </main>
    </div>
  )
}
