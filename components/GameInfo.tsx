const stats = [
  { label: 'Main Story', value: '~25h' },
  { label: 'Completionist', value: '~50h' },
  { label: 'Max Level', value: 'Lv 6' },
  { label: 'Platform', value: 'PC (Steam)' },
]

export default function GameInfo() {
  return (
    <div className="rounded-lg border border-brand-card bg-brand-surface p-4">
      <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand-gold">
        Game Info
      </h3>
      <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        {stats.map((s) => (
          <div key={s.label} className="flex justify-between">
            <dt className="text-brand-muted">{s.label}</dt>
            <dd className="font-medium text-brand-text">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
