import { skills } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-20">
  <SectionHeading
    eyebrow="Skills"
    title="Technical Skills"
    description="Core technical skills, tools, and technologies that support my work in IT Support, Networking, and System Administration."
  />

      <div className="grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
