type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
        <span className="h-px w-6 bg-primary" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
