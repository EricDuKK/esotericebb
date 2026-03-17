import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mage Hand Location & Uses — Esoteric Ebb Guide',
  description:
    'Where to get Mage Hand in Esoteric Ebb, why it\'s essential for the bird-nest item (tree climbing always fails on DEX), and its role in the Sphinx Riddle.',
  keywords: [
    'esoteric ebb mage hand',
    'esoteric ebb spells',
    'esoteric ebb bird nest',
    'esoteric ebb tree climbing',
    'esoteric ebb cantrip',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mage Hand in Esoteric Ebb — Location, Uses & Why You Need It',
  description: 'Mage Hand is essential for grabbing the hidden bird-nest item and completing the Sphinx Riddle.',
  author: { '@type': 'Organization', name: 'Esoteric Ebb Guide', url: 'https://esotericebb.guide' },
  publisher: { '@type': 'Organization', name: 'Esoteric Ebb Guide', url: 'https://esotericebb.guide' },
  datePublished: '2025-03-15',
  dateModified: '2026-03-17',
  mainEntityOfPage: 'https://esotericebb.guide/guides/mage-hand',
  about: { '@type': 'VideoGame', name: 'Esoteric Ebb' },
}

export default function MageHandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <span className="inline-block rounded bg-brand-gold/15 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            Spell Guide
          </span>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-brand-text sm:text-4xl">
            Mage Hand — Location &amp; Uses
          </h1>
          <p className="mt-2 text-brand-muted">
            The must-have <Link href="/guides/spell-preparation" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">cantrip</Link> for tree climbing, hidden items, and the Sphinx Riddle.
            <strong className="text-brand-text"> Dexterity checks will fail</strong> — Mage Hand is the intended solution.
          </p>
        </header>

        {/* Why You Need It */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Why Mage Hand Is Essential</h2>
          <p className="mt-2 text-sm text-brand-muted">
            The protagonist has <strong className="text-brand-text">low Dexterity</strong> by design.
            Climbing trees and precision interactions almost always fail on DEX checks.
            Mage Hand is the intended workaround — it lets you grab objects remotely without rolling.
          </p>
        </section>

        {/* Key Uses */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Key Uses</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-brand-card bg-brand-surface p-5">
              <h3 className="font-display font-bold text-brand-gold">Bird Nest (Hidden Item)</h3>
              <p className="mt-1 text-sm text-brand-muted">
                There&apos;s a bird nest high in a tree containing a hidden collectible.
                Attempting to climb the tree triggers a DEX check that is nearly impossible to pass.
                Cast Mage Hand to grab it safely from the ground.
              </p>
            </div>

            <div className="rounded-lg border border-brand-card bg-brand-surface p-5">
              <h3 className="font-display font-bold text-brand-gold">Sphinx Riddle (Step 1 of 3)</h3>
              <p className="mt-1 text-sm text-brand-muted">
                Mage Hand is the <strong className="text-brand-text">first cantrip</strong> in the
                Sphinx Riddle sequence at The Drunk Sphinx tavern.
                Cast it near the stage, followed by Druidcraft and Thaumaturgy, to earn the
                Deck of Many Things.
              </p>
            </div>
          </div>
        </section>

        {/* Related Spells */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Other Key Spells</h2>
          <div className="mt-4 space-y-3">
            {[
              {
                name: 'Grease',
                how: 'Read "A Gnome\'s Beginner Guide" found on Pillar Road (ground pickup)',
                use: 'Area control and environmental interaction',
              },
              {
                name: 'Speak with Dead',
                how: 'Level-3 spell slot required (player level 5+)',
                use: 'Investigation tool — but unavailable on Day 1 due to level restrictions',
              },
              {
                name: 'Detect Secret',
                how: 'Complete the Underdwarf task in the Goblin Underground Garden',
                use: 'Reveals hidden doors and passages (crucial for Star Witness quest)',
              },
            ].map((spell) => (
              <div key={spell.name} className="flex gap-4 rounded-lg border border-brand-card bg-brand-surface p-4">
                <div>
                  <p className="font-medium text-brand-text">{spell.name}</p>
                  <p className="mt-0.5 text-sm text-brand-muted">
                    <strong className="text-brand-gold">How:</strong> {spell.how}
                  </p>
                  <p className="mt-0.5 text-sm text-brand-muted">
                    <strong className="text-brand-gold">Use:</strong> {spell.use}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
