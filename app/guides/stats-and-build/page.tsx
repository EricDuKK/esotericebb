import Link from 'next/link'
import RiskWarning from '@/components/RiskWarning'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stats & Build Guide — Intelligence vs Charisma | Esoteric Ebb',
  description:
    'Esoteric Ebb build guide: Intelligence for passive checks & deduction, Charisma for manipulation & dialogue control. Stat priorities, Dexterity pitfalls, and recommended builds. Level cap 6, ~25h main story.',
  keywords: [
    'esoteric ebb build',
    'esoteric ebb stats',
    'esoteric ebb intelligence',
    'esoteric ebb charisma',
    'esoteric ebb best build',
    'esoteric ebb spells',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Esoteric Ebb Stats & Build Guide — Intelligence vs Charisma',
  description: 'Deep dive into Intelligence and Charisma builds in Esoteric Ebb, with stat priorities and pitfalls to avoid.',
  author: { '@type': 'Organization', name: 'Esoteric Ebb Guide', url: 'https://esotericebb.guide' },
  publisher: { '@type': 'Organization', name: 'Esoteric Ebb Guide', url: 'https://esotericebb.guide' },
  datePublished: '2025-03-15',
  dateModified: '2026-03-17',
  mainEntityOfPage: 'https://esotericebb.guide/guides/stats-and-build',
  about: { '@type': 'VideoGame', name: 'Esoteric Ebb' },
}

const stats = [
  {
    name: 'Intelligence',
    role: 'Core Investigation Stat',
    icon: '🧠',
    pros: [
      'Unlocks numerous Passive Checks — see through logic flaws and hidden text automatically',
      'Best stat for investigation-heavy playthroughs',
      'Opens unique dialogue options that bypass puzzles entirely',
    ],
    tip: 'Prioritize Intelligence if you want to uncover every secret without pixel-hunting.',
  },
  {
    name: 'Charisma',
    role: 'Social Manipulation Stat',
    icon: '🗣️',
    pros: [
      'Controls dialogue flow — steer NPCs toward favorable outcomes',
      'Keep the Apolitical tag to maximize benefits from all factions',
      'Plays like a "social sociopath" — manipulate rather than befriend',
    ],
    tip: 'Golden rule: don\'t pick sides too early. Stay Apolitical as long as possible.',
  },
  {
    name: 'Dexterity',
    role: 'Weakest Stat for Protagonist',
    icon: '🤸',
    pros: [
      'Used for climbing and fine motor tasks',
    ],
    tip: 'Tree-climbing and precision tasks almost always fail on DEX checks. Use spells like Mage Hand instead.',
  },
]

export default function StatsAndBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <span className="inline-block rounded bg-brand-gold/15 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            Build Guide
          </span>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-brand-text sm:text-4xl">
            Stats &amp; Build Guide
          </h1>
          <p className="mt-2 text-brand-muted">
            Intelligence for deduction, Charisma for manipulation — pick your playstyle. Level cap is <strong className="text-brand-text">Lv 6</strong>.
          </p>
        </header>

        {/* Stat Breakdown */}
        <section className="mt-10 space-y-6">
          <h2 className="font-display text-xl font-bold text-brand-text">Core Attributes</h2>
          {stats.map((s) => (
            <div key={s.name} className="rounded-lg border border-brand-card bg-brand-surface p-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-text">{s.name}</h3>
                  <p className="text-xs text-brand-muted">{s.role}</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-brand-muted list-disc list-inside">
                {s.pros.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <p className="mt-3 rounded bg-brand-deep px-3 py-2 text-sm text-brand-gold">
                Tip: {s.tip}
              </p>
            </div>
          ))}
        </section>

        {/* Charisma Warning */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Charisma Build — Pitfall</h2>
          <RiskWarning title="Faction Warning">
            Picking a faction too early locks you out of Charisma-based manipulation options with
            rival factions. Stay <strong>Apolitical</strong> until you&apos;ve exhausted all
            dialogue trees you care about.
          </RiskWarning>
        </section>

        {/* Recommended Builds */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Recommended Builds</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-card bg-brand-surface p-4">
              <h3 className="font-display font-bold text-brand-gold">Detective</h3>
              <p className="mt-1 text-sm text-brand-muted">
                INT primary, WIS secondary. Maximize passive checks, uncover every hidden clue automatically.
              </p>
            </div>
            <div className="rounded-lg border border-brand-card bg-brand-surface p-4">
              <h3 className="font-display font-bold text-brand-gold">Manipulator</h3>
              <p className="mt-1 text-sm text-brand-muted">
                CHA primary, INT secondary. Control every conversation, play factions against each other.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Related Guides</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-brand-muted list-disc list-inside">
            <li>Dexterity too low? Learn which <Link href="/guides/spell-preparation" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">spells to prepare</Link> as alternatives</li>
            <li>Understand <Link href="/guides/companions" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">Snell &amp; companion</Link> interactions with your build choices</li>
          </ul>
        </section>
      </article>
    </>
  )
}
