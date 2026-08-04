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

      <div className="grid gap-8 lg:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {group.category}
              </h3>
              <span className="text-xs font-medium text-primary">
                {group.items.length} items
              </span>
            </div>

            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-primary to-cyan-400"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
