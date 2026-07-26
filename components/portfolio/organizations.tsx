import { organizations } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Organizations() {
  return (
    <section id="organizations" className="scroll-mt-24 border-t border-border py-20">
  <SectionHeading
    eyebrow="Leadership"
    title="Leadership & Organizational Experience"
    description="Experiences in leading teams, organizing events, and contributing to student organizations while developing leadership, collaboration, and organizational management skills."
  />

      <ol className="relative border-l border-border">
        {organizations.map((org) => (
          <li key={org.position + org.organization} className="mb-10 ml-6 last:mb-0">
            <span
              className="absolute -left-2 mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-background bg-primary"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-medium">{org.position}</h3>
              <span className="text-sm text-muted-foreground">{org.period}</span>
            </div>
            <p className="mt-0.5 font-medium text-primary">{org.organization}</p>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
              {org.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {org.tags.map((tag) => (
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
