"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { certifications, type Certification } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Modal } from "./modal"

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null)

  return (
    <section id="certifications" className="scroll-mt-24 border-t border-border py-20">
      <SectionHeading
  eyebrow="Credentials"
  title="Certifications & Achievements"
  description="Professional certifications and awards that reflect my technical expertise and dedication to continuous learning."
/>

      <div className="overflow-x-auto pb-2">
        <ul className="flex min-w-max gap-6">
          {certifications.map((cert) => (
            <li key={cert.name} className="w-70 shrink-0 sm:w-[320px]">
              <button
                type="button"
                onClick={() => setActive(cert)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="overflow-hidden bg-accent/30">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={`Lencana ${cert.name}`}
                    width={640}
                    height={400}
                    className="aspect-3/2 h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-pretty text-lg font-medium leading-snug">{cert.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {cert.issuer} &middot; {cert.year}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                    Detail
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal open={active !== null} onClose={() => setActive(null)} labelledBy="cert-modal-title">
        {active && (
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
              <span className="flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-accent/40 sm:h-44 sm:w-44">
                <Image
                  src={active.image || "/placeholder.svg"}
                  alt={`Lencana ${active.name}`}
                  width={176}
                  height={176}
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="w-full">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {active.issuer} &middot; {active.year}
                </p>
                <h3 id="cert-modal-title" className="mt-2 font-serif text-2xl font-semibold text-balance sm:text-3xl">
                  {active.name}
                </h3>
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {active.description}
            </p>
          </div>
        )}
      </Modal>
    </section>
  )
}
