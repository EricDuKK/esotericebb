interface RiskWarningProps {
  title?: string
  children: React.ReactNode
}

export default function RiskWarning({ title = 'Risk Warning', children }: RiskWarningProps) {
  return (
    <aside
      role="alert"
      className="my-6 rounded-lg border border-brand-ember/40 bg-brand-ember/10 p-4 md:p-5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-xl leading-none" aria-hidden="true">&#9888;</span>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-ember">
            {title}
          </p>
          <div className="mt-1 text-sm leading-relaxed text-brand-text/90">
            {children}
          </div>
        </div>
      </div>
    </aside>
  )
}
