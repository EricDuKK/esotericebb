import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Sleep & Rest — Shrines, Exhaustion | Esoteric Ebb',
  description:
    'Esoteric Ebb rest guide: where to long rest (Shrines only), how short rests remove exhaustion, and what happens if you skip sleeping.',
  keywords: [
    'esoteric ebb sleep',
    'esoteric ebb where to sleep',
    'esoteric ebb rest',
    'esoteric ebb shrine',
    'esoteric ebb exhaustion',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Rest and Sleep in Esoteric Ebb',
  description: 'Understand the rest system: Short Rests remove exhaustion, Long Rests at Shrines restore everything.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Short Rest',
      text: 'Take a Short Rest anywhere to remove one level of Exhaustion.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Find a Shrine',
      text: 'Locate a Shrine in the world — these are the only places where Long Rests are possible.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Long Rest',
      text: 'Perform a Long Rest at a Shrine to fully restore HP and all spell slots.',
    },
  ],
}

export default function SleepAndRestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <span className="inline-block rounded bg-brand-gold/15 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            Mechanics
          </span>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-brand-text sm:text-4xl">
            How to Sleep &amp; Rest
          </h1>
          <p className="mt-2 text-brand-muted">
            Short Rests remove exhaustion anywhere. Long Rests require a <strong className="text-brand-gold">Shrine</strong> and restore everything.
          </p>
        </header>

        {/* Rest Types */}
        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-bold text-brand-text">Rest Types</h2>

          <div className="rounded-lg border border-brand-card bg-brand-surface p-5">
            <h3 className="font-display text-lg font-bold text-brand-text">Short Rest</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-brand-muted list-disc list-inside">
              <li>Can be performed <strong className="text-brand-text">anywhere</strong></li>
              <li>Removes <strong className="text-brand-text">one level</strong> of Exhaustion</li>
              <li>Does <em>not</em> restore HP or spell slots</li>
            </ul>
          </div>

          <div className="rounded-lg border border-brand-gold/30 bg-brand-surface p-5">
            <h3 className="font-display text-lg font-bold text-brand-gold">Long Rest (Shrine Only)</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-brand-muted list-disc list-inside">
              <li>Must be done at a <strong className="text-brand-gold">Shrine</strong> — no other location works</li>
              <li>Fully restores <strong className="text-brand-text">HP</strong> and all <strong className="text-brand-text">spell slots</strong></li>
              <li>Removes all Exhaustion levels</li>
            </ul>
          </div>
        </section>

        {/* Exhaustion */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Exhaustion Penalty</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Skipping rest causes <strong className="text-brand-text">cumulative penalties</strong>:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-brand-muted list-disc list-inside">
            <li>All dice rolls receive a <strong className="text-brand-text">Minus</strong> modifier</li>
            <li>Maximum HP decreases with each exhaustion level</li>
            <li>Multiple levels stack — your character becomes progressively weaker</li>
          </ul>
          <p className="mt-3 rounded bg-brand-deep px-3 py-2 text-sm text-brand-gold">
            Tip: Don&apos;t push through multiple encounters without resting. The penalties compound quickly and can make boss fights unwinnable.
          </p>
        </section>

        {/* Finding Shrines */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Finding Shrines</h2>
          <p className="mt-2 text-sm text-brand-muted">
            The game has no traditional map, but you can track discovered rest points:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-brand-muted list-disc list-inside">
            <li>Press <strong className="text-brand-text">Journal</strong> — it marks all discovered doors, exits, and connection points including Shrines</li>
            <li>Use <strong className="text-brand-text">Behold</strong> to scan the environment — it works as a radar for hidden shortcuts and landmarks</li>
          </ul>
        </section>
      </article>
    </>
  )
}
