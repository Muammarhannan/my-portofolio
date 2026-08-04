"use client"

import { useState } from "react"
import { Eye, GraduationCap } from "lucide-react"
import { education } from "@/lib/portfolio-data"
import { Modal } from "./modal"
import { SectionHeading } from "./section-heading"

export function Education() {
  const [selectedEdu, setSelectedEdu] = useState<(typeof education)[number] | null>(null)

  return (
    <section id="education" className="scroll-mt-24 border-t border-border py-20">
      <SectionHeading
        eyebrow="Education"
        title="Education & Academic Background"
        description="Academic qualifications and practical learning experiences that have built my expertise in IT infrastructure, networking, and system administration."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((edu) => (
          <button
            key={edu.degree}
            type="button"
            onClick={() => setSelectedEdu(edu)}
            className="w-full rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/40 hover:bg-accent/40"
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
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Eye className="h-4 w-4" />
              Lihat Ijazah
            </div>
          </button>
        ))}
      </div>

      <Modal
        open={Boolean(selectedEdu)}
        onClose={() => setSelectedEdu(null)}
        labelledBy="education-modal-title"
      >
        {selectedEdu ? (
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Education</p>
              <h3 id="education-modal-title" className="text-2xl font-semibold text-foreground">
                {selectedEdu.degree}
              </h3>
              <p className="text-muted-foreground">{selectedEdu.school} • {selectedEdu.period}</p>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-2xl border border-border bg-background/70 p-3">
                <img
                  src={selectedEdu.image}
                  alt={`Ijazah ${selectedEdu.degree}`}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-accent/30 p-4">
                  <p className="text-sm font-semibold text-foreground">Detail Pendidikan</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selectedEdu.detail}</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-sm font-semibold text-foreground">Catatan</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Klik di luar area modal atau tombol close untuk menutup popup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}
