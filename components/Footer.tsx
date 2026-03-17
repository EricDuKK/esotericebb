import GameInfo from './GameInfo'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-card bg-brand-surface">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-gold">
              Esoteric Ebb Guide
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Community-driven walkthrough &amp; tips. Not affiliated with the official developers.
            </p>
          </div>
          <GameInfo />
        </div>
        <p className="mt-8 text-center text-xs text-brand-muted/60">
          &copy; {new Date().getFullYear()} esotericebb-guide.sbs &middot; Fan-made &middot; All game assets belong to their respective owners.
        </p>
      </div>
    </footer>
  )
}
