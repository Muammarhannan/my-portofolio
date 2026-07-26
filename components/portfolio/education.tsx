import { GraduationCap } from "lucide-react"
import { education } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-border py-20">
  <SectionHeading
    eyebrow="Education"
    title="Education & Academic Background"
    description="Academic qualifications and practical learning experiences that have built my expertise in IT infrastructure, networking, and system administration."
  />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((edu) => (
          <article
            key={edu.degree}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium">{edu.degree}</h3>
              <span className="whitespace-nowrap text-sm text-muted-foreground">{edu.period}</span>
            </div>
            <p className="mt-1 font-medium text-primary">{edu.school}</p>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              {edu.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
