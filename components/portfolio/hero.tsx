import Image from "next/image"
import { MapPin, ArrowUpRight, Download } from "lucide-react"
import { profile, summary } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section id="summary" className="scroll-mt-24 pt-16 pb-20 sm:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to Work
            </span>
          )}

          <h1 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            {profile.role} &middot;{" "}
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed">
            {summary.headline}
          </p>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {summary.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Lihat proyek
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cvUrl || "/cv-muammar-hannan-najib.pdf"}
              download={profile.cvFileName || "CV_MuAmmar_Hannan_Najib.pdf"}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-secondary"
            >
              Download CV
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-background/70 px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-secondary"
              >
                {s.label}
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {summary.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl font-medium">{stat.value}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-accent/60" aria-hidden="true" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Image
              src={profile.avatar || "/placeholder.svg"}
              alt={`Foto ${profile.name}`}
              width={480}
              height={560}
              priority
              className="h-auto w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
