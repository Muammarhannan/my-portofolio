"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Check } from "lucide-react"
import { projects, type Project } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Modal } from "./modal"
import { GalleryCarousel } from "./gallery-carousel"

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-20">
  <SectionHeading
    eyebrow="Projects"
    title="Technical Projects"
    description="Hands-on projects demonstrating my practical experience in computer networking, IT infrastructure, system administration, and software development."
  />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActive(project)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`Pratinjau ${project.title}`}
                width={640}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: "16 / 10" }}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto flex items-center gap-1 text-xs font-medium text-primary">
                  Detail
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Modal open={active !== null} onClose={() => setActive(null)} labelledBy="project-modal-title">
        {active && (
          <>
            <GalleryCarousel images={active.gallery} title={active.title} />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                {active.category}
              </p>
              <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 id="project-modal-title" className="font-serif text-2xl font-semibold">
                  {active.title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {active.role} &middot; {active.year}
                </span>
              </div>

              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {active.longDescription}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold">Detail & fitur utama</h4>
                <ul className="mt-3 grid gap-2">
                  {active.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-pretty">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold">Tools & teknologi</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  )
}
