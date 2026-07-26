import { experiences } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-20">
  <SectionHeading
    eyebrow="Experience"
    title="Professional Experience"
    description="A collection of internships and professional roles that strengthened my technical skills, problem-solving abilities, and hands-on experience in IT operations."
  />

      <ol className="relative border-l border-border">
        {experiences.map((exp) => (
          <li key={exp.role + exp.company} className="mb-10 ml-6 last:mb-0">
            <span
              className="absolute -left-1.75 mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-background bg-primary"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-medium">{exp.role}</h3>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="mt-0.5 font-medium text-primary">{exp.company}</p>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
