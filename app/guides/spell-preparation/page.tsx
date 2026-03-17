import RiskWarning from '@/components/RiskWarning'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spell Preparation & Casting Guide — Esoteric Ebb',
  description:
    'How spell preparation works in Esoteric Ebb: cantrips vs leveled spells, spell slot system, level requirements, and key spells to prioritize (Mage Hand, Grease, Speak with Dead, Detect Secret).',
  keywords: [
    'esoteric ebb spells',
    'esoteric ebb spell preparation',
    'esoteric ebb cantrips',
    'esoteric ebb spell slots',
    'esoteric ebb magic system',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Spell Preparation & Casting in Esoteric Ebb — Complete Guide',
  description: 'Understand cantrips, spell slots, level requirements, and which spells to prepare first.',
}

export default function SpellPreparationPage() {
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
            Spell Preparation &amp; Casting
          </h1>
          <p className="mt-2 text-brand-muted">
            Cantrips are free. Leveled spells cost slots. Slots recharge on Long Rest at a Shrine.
          </p>
        </header>

        {/* Cantrips vs Leveled */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Cantrips vs Leveled Spells</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-card bg-brand-surface p-4">
              <h3 className="font-display font-bold text-brand-gold">Cantrips (Level 0)</h3>
              <ul className="mt-2 space-y-1 text-sm text-brand-muted list-disc list-inside">
                <li>Unlimited uses — no spell slots needed</li>
                <li>Key cantrips: Mage Hand, Druidcraft, Thaumaturgy</li>
                <li>All three are required for the Sphinx Riddle</li>
              </ul>
            </div>
            <div className="rounded-lg border border-brand-card bg-brand-surface p-4">
              <h3 className="font-display font-bold text-brand-gold">Leveled Spells (1–3)</h3>
              <ul className="mt-2 space-y-1 text-sm text-brand-muted list-disc list-inside">
                <li>Consume spell slots when cast</li>
                <li>Slots restore only on Long Rest (Shrine)</li>
                <li>Higher-level spells unlock as you level up (cap: Lv 6)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Level Requirements */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Level Requirements</h2>
          <div className="mt-4 space-y-3">
            {[
              { spell: 'Mage Hand', level: 'Any (Cantrip)', note: 'Available from the start if chosen' },
              { spell: 'Grease', level: 'Level 1+', note: 'Learned by reading "A Gnome\'s Beginner Guide" on Pillar Road' },
              { spell: 'Detect Secret', level: 'Level 1+', note: 'Earned from the Underdwarf in Goblin Underground Garden' },
              { spell: 'Speak with Dead', level: 'Level 5+ (3rd-level slot)', note: 'Unavailable on Day 1 — don\'t waste time trying' },
            ].map((s) => (
              <div key={s.spell} className="flex items-start gap-4 rounded-lg border border-brand-card bg-brand-surface p-4">
                <div>
                  <p className="font-medium text-brand-text">
                    {s.spell}{' '}
                    <span className="text-xs text-brand-gold">({s.level})</span>
                  </p>
                  <p className="mt-0.5 text-sm text-brand-muted">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Slot Recovery */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Spell Slot Recovery</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Spell slots <strong className="text-brand-text">only</strong> recover on a{' '}
            <strong className="text-brand-gold">Long Rest at a Shrine</strong>. Short Rests do not restore slots.
            Plan your casting carefully between Shrines — running out of slots in a dangerous area can be fatal.
          </p>
        </section>

        {/* Warning */}
        <section className="mt-10">
          <RiskWarning title="Druidcraft Bug">
            Casting Druidcraft near the Frozen Sprout NPC triggers a known dialogue error.
            Skip this NPC until an official hotfix is released (check Steam patch notes).
          </RiskWarning>
        </section>
      </article>
    </>
  )
}
