import QuickFixes from '@/components/QuickFixes'
import RiskWarning from '@/components/RiskWarning'
import StuckChecker from '@/components/StuckChecker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Esoteric Ebb Walkthrough & Guide — Riddles, Builds, Tips',
  description:
    'Complete Esoteric Ebb guide: Sphinx riddle solution, Star Witness walkthrough, Deck of Many Things, best builds, rest mechanics, map navigation tips & community bug fixes. PC (Steam) only — no PS5, Switch or Xbox release yet.',
  keywords: [
    'esoteric ebb walkthrough',
    'esoteric ebb riddle',
    'esoteric ebb sphinx',
    'esoteric ebb guide',
    'deck of many things esoteric ebb',
    'esoteric ebb build',
    'esoteric ebb mage hand',
    'esoteric ebb sleep',
    'esoteric ebb map',
    'esoteric ebb price',
    'esoteric ebb ps5',
    'esoteric ebb switch',
  ],
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-card">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-10 text-center">
          <h1
            className="font-display text-4xl font-black leading-tight tracking-tight text-brand-text sm:text-5xl md:text-6xl animate-fade-up"
          >
            Esoteric Ebb
            <span className="block text-brand-gold">Complete Guide</span>
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-lg text-brand-muted animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Riddle solutions, build strategies, bug workarounds &amp; community wisdom — all in one place.
          </p>
        </div>
      </section>

      {/* Stuck Checker — most prominent position */}
      <StuckChecker />

      {/* Quick Fixes Grid */}
      <QuickFixes />

      {/* Rest & Sleep Mechanics */}
      <section id="rest-mechanics" className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-brand-text">
          Rest &amp; Sleep Mechanics
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
          <p>
            <strong className="text-brand-text">Short Rest</strong> — removes one level of
            Exhaustion. Can be done anywhere.
          </p>
          <p>
            <strong className="text-brand-text">Long Rest</strong> — must be performed at a{' '}
            <strong className="text-brand-gold">Shrine</strong>. Restores full HP and all spell
            slots.
          </p>
          <p>
            <strong className="text-brand-text">Exhaustion Penalty</strong> — skipping rest
            applies a cumulative Minus to all dice rolls and lowers max HP.
          </p>
        </div>
      </section>

      {/* Bug Warning */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <RiskWarning title="Known Bugs">
          <p>
            <strong>Frozen Sprout dialogue error</strong> — triggers after Druidcraft.
            Workaround: skip this NPC and return after the next hotfix (check Steam patch
            notes).
          </p>
          <p className="mt-2">
            <strong>Proficiency display bug</strong> — only one proficiency shown despite
            selecting multiple at character creation. A save-file edit exists but is risky;
            waiting for an official patch is recommended.
          </p>
        </RiskWarning>
      </section>
    </>
  )
}
