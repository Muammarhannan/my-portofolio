"use client"

import { type MouseEvent } from "react"
import { profile } from "@/lib/portfolio-data"

export function Footer() {
  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const whatsappNumber = profile.whatsapp?.replace(/\D/g, "")
    const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : ""
    const emailUrl = `mailto:${profile.email}`

    if (whatsappUrl) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    }

    window.location.href = emailUrl
  }

  return (
  <footer className="border-t border-border py-16">
    <div className="rounded-3xl bg-accent/50 p-8 text-center sm:p-12">
      <h2 className="text-balance font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Open to Opportunities
      </h2>

      <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
        I am actively seeking opportunities in IT Support, Network Engineering,
        and System Administration. Feel free to reach out if you have a suitable
        role or would like to discuss how I can contribute to your team.
      </p>

      <a
        href={`mailto:${profile.email}`}
        onClick={handleContactClick}
        className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {profile.email}
      </a>
    </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Semua hak dilindungi.
        </p>
        <ul className="flex items-center gap-5">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
