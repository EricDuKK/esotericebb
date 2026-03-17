import RiskWarning from '@/components/RiskWarning'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sphinx Riddle & Deck of Many Things — Esoteric Ebb Guide',
  description:
    'Step-by-step Sphinx riddle solution in Esoteric Ebb: exact cantrip order (Mage Hand → Druidcraft → Thaumaturgy), how to earn the Deck of Many Things, and risk warnings.',
  keywords: [
    'esoteric ebb riddle',
    'esoteric ebb sphinx',
    'deck of many things esoteric ebb',
    'esoteric ebb mage hand',
    'sphinx riddle solution',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Solve the Sphinx Riddle in Esoteric Ebb',
  description: 'Cast three cantrips in order at The Drunk Sphinx tavern to earn the Deck of Many Things.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Go to The Drunk Sphinx',
      text: 'Travel to The Drunk Sphinx tavern in the Tolstad district. Arrive in the Morning and go alone (without Snell).',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Cast Mage Hand',
      text: 'Near the stage, cast the Arcane cantrip Mage Hand.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Cast Druidcraft',
      text: 'Next, cast the Nature cantrip Druidcraft.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Cast Thaumaturgy',
      text: 'Finally, cast the Divine cantrip Thaumaturgy to complete the sequence.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Claim the Deck of Many Things',
      text: 'The Sphinx rewards you with the Deck of Many Things artifact. Save before drawing — results are random.',
    },
  ],
}

export default function SphinxRiddlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <span className="inline-block rounded bg-brand-gold/15 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            Quest Guide
          </span>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-brand-text sm:text-4xl">
            Sphinx Riddle Solution
          </h1>
          <p className="mt-2 text-brand-muted">
            Quick answer: cast <strong className="text-brand-text">Mage Hand → Druidcraft → Thaumaturgy</strong> at
            The Drunk Sphinx tavern to earn the <strong className="text-brand-gold">Deck of Many Things</strong>.
            Full walkthrough below.
          </p>
        </header>

        {/* Prerequisites */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Prerequisites</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted list-disc list-inside">
            <li>Location: <strong className="text-brand-text">The Drunk Sphinx</strong> tavern, Tolstad district</li>
            <li>Time: must arrive in the <strong className="text-brand-text">Morning</strong></li>
            <li>Party: go <strong className="text-brand-text">alone</strong> (dismiss Snell), otherwise the deep dialogue won&apos;t trigger</li>
            <li>Know three cantrips: Mage Hand, Druidcraft, Thaumaturgy</li>
          </ul>
        </section>

        {/* Step-by-step */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">
            Cantrip Sequence (Exact Order)
          </h2>
          <ol className="mt-4 space-y-4">
            {[
              { step: 1, name: 'Mage Hand', type: 'Arcane', detail: 'Cast near the stage area.' },
              { step: 2, name: 'Druidcraft', type: 'Nature', detail: 'Cast immediately after Mage Hand.' },
              { step: 3, name: 'Thaumaturgy', type: 'Divine', detail: 'Cast last to complete the ritual.' },
            ].map((s) => (
              <li key={s.step} className="flex gap-4 rounded-lg border border-brand-card bg-brand-surface p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 font-display text-sm font-bold text-brand-gold">
                  {s.step}
                </span>
                <div>
                  <p className="font-medium text-brand-text">
                    {s.name}{' '}
                    <span className="text-xs text-brand-muted">({s.type})</span>
                  </p>
                  <p className="mt-0.5 text-sm text-brand-muted">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Reward */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Reward: Deck of Many Things</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Completing the sequence grants the legendary artifact <strong className="text-brand-gold">Deck of Many Things</strong>.
            Drawing cards produces <em>random</em> results — you may gain incredible power or lose everything.
          </p>
          <RiskWarning title="Deck of Many Things">
            Drawing is <strong>irreversible</strong>. Results range from massive stat boosts to
            a ruined save file. <strong>Always create a manual save before drawing any card.</strong>
          </RiskWarning>
        </section>

        {/* Mage Hand */}
        <section id="mage-hand" className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">
            Mage Hand — Where &amp; Why
          </h2>
          <p className="mt-2 text-sm text-brand-muted">
            <strong className="text-brand-text">Mage Hand</strong> is essential beyond the Sphinx puzzle.
            Use it to grab the hidden bird-nest item from a tree (an interaction that always fails with Dexterity checks).
            It&apos;s also one of the three cantrips required for this riddle — make sure you have it before visiting.
          </p>
        </section>
      </article>
    </>
  )
}
