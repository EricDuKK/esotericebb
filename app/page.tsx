import Link from 'next/link'
import QuickFixes from '@/components/QuickFixes'
import RiskWarning from '@/components/RiskWarning'
import StuckChecker from '@/components/StuckChecker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Esoteric Ebb Walkthrough & Guide — Riddles, Builds, Tips',
  description:
    'Esoteric Ebb guide: Sphinx riddle solution, Star Witness walkthrough, Deck of Many Things, builds, rest mechanics, map tips & bug fixes. PC (Steam) only.',
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

const videoGameJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Esoteric Ebb',
  description: 'A narrative-driven RPG built on D&D-inspired mechanics, featuring riddles, political intrigue, and arcane secrets.',
  genre: ['Role-Playing', 'Adventure', 'Puzzle'],
  gamePlatform: ['PC', 'Steam', 'Steam Deck'],
  operatingSystem: 'Windows',
  applicationCategory: 'Game',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    ratingCount: '1200',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    url: 'https://store.steampowered.com',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I solve the Sphinx Riddle in Esoteric Ebb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Go to The Drunk Sphinx tavern in Tolstad in the Morning, alone (without Snell). Cast three cantrips in order near the stage: Mage Hand (Arcane), Druidcraft (Nature), Thaumaturgy (Divine). This rewards you with the Deck of Many Things.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the hidden door in City Below for the Star Witness quest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Head to the Northwest (NW) section of City Below. The hidden door is along the NW wall. You can find it by casting Detect Secret (learned from the Underdwarf in the Goblin Underground Garden) or by carefully searching the walls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Speak with Dead fail in Esoteric Ebb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speak with Dead requires a level-3 spell slot (player level 5+). On Day 1 your level is too low. Additionally, the body is removed by elves as a story event — this is intentional, not a bug.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best build in Esoteric Ebb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intelligence is the best primary stat for investigation — it unlocks passive checks that reveal hidden clues automatically. Charisma is best for dialogue manipulation. Dexterity is the weakest stat for the protagonist; use Mage Hand instead of DEX checks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is Esoteric Ebb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main story takes approximately 25 hours. A completionist run (all side-quests, collectibles, and companion content) takes around 50 hours. The level cap is 6.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Esoteric Ebb on PS5, Xbox, or Switch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esoteric Ebb is currently PC-only, available on Steam with Steam Deck support. There is no confirmed PS5, Xbox, or Nintendo Switch release at this time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I sleep in Esoteric Ebb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Long Rests (full HP and spell slot recovery) can only be performed at Shrines. Short Rests can be taken anywhere and remove one level of Exhaustion. Use the Journal and Behold ability to locate Shrines.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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

      {/* Intro / What Is Esoteric Ebb */}
      <section className="mx-auto max-w-4xl px-4 pt-12 pb-6">
        <h2 className="font-display text-2xl font-bold text-brand-text">
          What Is Esoteric Ebb?
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
          <p>
            <strong className="text-brand-text">Esoteric Ebb</strong> is a narrative-driven RPG
            built on D&amp;D-inspired mechanics. Players take on the role of an investigator
            navigating a dark fantasy city filled with riddles, political intrigue, and arcane
            secrets. The game has drawn comparisons to Disco Elysium for its dialogue-heavy
            approach, but Esoteric Ebb distinguishes itself with a deeper spell-casting system
            and branching quest design that rewards multiple playthroughs.
          </p>
          <p>
            With a main story lasting roughly <strong className="text-brand-text">25 hours</strong> and
            a completionist run stretching to <strong className="text-brand-text">50 hours</strong>,
            Esoteric Ebb offers dense content packed into a level cap
            of <strong className="text-brand-text">Lv 6</strong>. The game is currently available
            on <strong className="text-brand-text">PC via Steam</strong> with Steam Deck support.
            There is no PS5, Xbox, or Switch version at this time.
          </p>
          <p>
            This guide covers everything you need to master Esoteric Ebb — from the
            infamous <Link href="/guides/sphinx-riddle" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">Sphinx riddle</Link> and
            its Deck of Many Things reward, to optimal build strategies
            for <Link href="/guides/stats-and-build" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">Intelligence and Charisma builds</Link>,
            spell preparation, companion management, and every known bug workaround reported by
            the Esoteric Ebb community.
          </p>
        </div>
      </section>

      {/* Stuck Checker — most prominent position */}
      <StuckChecker />

      {/* Quick Fixes Grid */}
      <QuickFixes />

      {/* Sphinx Riddle Overview */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-brand-text">
          Esoteric Ebb Sphinx Riddle — Quick Overview
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
          <p>
            The <strong className="text-brand-text">Sphinx riddle</strong> is the most searched
            puzzle in Esoteric Ebb. Located at <strong className="text-brand-text">The Drunk
            Sphinx</strong> tavern in Tolstad, this riddle requires you to cast three cantrips in
            the exact sequence: <strong className="text-brand-gold">Mage Hand → Druidcraft →
            Thaumaturgy</strong>. You must arrive in the morning and go alone — bringing your
            companion Snell will prevent the deep dialogue from triggering.
          </p>
          <p>
            Solving the Esoteric Ebb Sphinx riddle grants the legendary artifact
            <strong className="text-brand-gold"> Deck of Many Things</strong>. This powerful item
            lets you draw cards with random outcomes — anything from massive stat boosts to a
            completely ruined save. Every experienced Esoteric Ebb player recommends creating a
            manual save before drawing any card from the Deck of Many Things.
            Read our <Link href="/guides/sphinx-riddle" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">full Sphinx riddle walkthrough</Link> for
            step-by-step instructions.
          </p>
        </div>
      </section>

      {/* Build Guide Overview */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-brand-text">
          Esoteric Ebb Build Guide — Intelligence vs Charisma
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
          <p>
            Choosing the right build in Esoteric Ebb fundamentally changes how you experience the
            game. An <strong className="text-brand-text">Intelligence build</strong> unlocks passive
            checks throughout Esoteric Ebb, letting you automatically detect logic flaws, hidden
            text, and environmental clues without manual interaction. This is the recommended
            Esoteric Ebb build for players who want to uncover every secret on their first run.
          </p>
          <p>
            A <strong className="text-brand-text">Charisma build</strong> in Esoteric Ebb turns
            you into a master manipulator. You can steer NPC dialogue, play factions against each
            other, and unlock persuasion options unavailable to other Esoteric Ebb builds. The
            golden rule for any Charisma build: stay <strong className="text-brand-gold">Apolitical</strong> as
            long as possible to keep all faction doors open.
          </p>
          <p>
            <strong className="text-brand-text">Dexterity</strong> is the weakest stat for your
            Esoteric Ebb protagonist. Tree-climbing and precision tasks almost always fail on DEX
            checks — use <Link href="/guides/mage-hand" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">Mage Hand</Link> instead.
            See our <Link href="/guides/stats-and-build" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">complete Esoteric Ebb build guide</Link> for
            detailed stat comparisons and recommended builds.
          </p>
        </div>
      </section>

      {/* Spell & Rest Mechanics */}
      <section id="rest-mechanics" className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-brand-text">
          Esoteric Ebb Rest &amp; Spell Mechanics
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
          <p>
            Understanding rest mechanics is critical for surviving Esoteric Ebb. The game uses a
            D&amp;D-style rest system: <strong className="text-brand-text">Short Rests</strong> can
            be taken anywhere and remove one level of Exhaustion, while <strong className="text-brand-text">Long
            Rests</strong> require a <strong className="text-brand-gold">Shrine</strong> and fully
            restore HP plus all spell slots.
          </p>
          <p>
            Skipping rest in Esoteric Ebb causes cumulative <strong className="text-brand-text">Exhaustion
            penalties</strong> — all dice rolls receive a Minus modifier and your maximum HP
            decreases. Multiple Exhaustion levels stack, making encounters progressively harder.
            The Esoteric Ebb community strongly recommends never pushing through more than two
            encounters without resting.
          </p>
          <p>
            Spell preparation in Esoteric Ebb follows a cantrip-plus-slots model. Cantrips like
            Mage Hand, Druidcraft, and Thaumaturgy are free to cast at any time — these are the
            same three cantrips needed for the Sphinx riddle. Leveled spells consume spell slots
            that only recharge on Long Rest. Key spells in Esoteric Ebb include <strong className="text-brand-text">Grease</strong> (found
            by reading a book on Pillar Road), <strong className="text-brand-text">Detect
            Secret</strong> (earned from the Underdwarf quest), and <strong className="text-brand-text">Speak
            with Dead</strong> (requires level 5+).
            See our <Link href="/guides/spell-preparation" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">spell preparation guide</Link> and <Link href="/guides/sleep-and-rest" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">rest mechanics guide</Link> for
            full details.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-brand-text">
          Esoteric Ebb Map &amp; Navigation
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
          <p>
            Esoteric Ebb does not have a traditional minimap. Instead, the game relies on
            two key tools for navigation. Press <strong className="text-brand-text">Journal</strong> to
            view all discovered doors, exits, and connection points — this is the closest
            Esoteric Ebb has to a map. Use the <strong className="text-brand-text">Behold</strong> ability
            to scan the environment for hidden shortcuts and landmarks that are not visible
            through normal exploration.
          </p>
          <p>
            The lack of a map is the second-most common complaint in the Esoteric Ebb community
            after the Sphinx riddle. Mastering Journal and Behold early will save you hours of
            backtracking. For the Star Witness quest specifically, the hidden door in City Below
            NW is nearly impossible to find without using Detect Secret
            or Behold — see our <Link href="/guides/star-witness" className="text-brand-gold underline underline-offset-2 hover:text-brand-text">Star Witness walkthrough</Link> for
            the exact location.
          </p>
        </div>
      </section>

      {/* Bug Warning */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-brand-text">
          Esoteric Ebb Known Bugs &amp; Workarounds
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          The Esoteric Ebb community has identified several bugs that can disrupt gameplay.
          Here are the most impactful issues and their workarounds:
        </p>
        <RiskWarning title="Known Bugs">
          <p>
            <strong>Frozen Sprout dialogue error</strong> — triggers after casting Druidcraft in
            Esoteric Ebb. Workaround: skip this NPC and return after the next hotfix (check Steam
            patch notes, usually around 10:00 CET).
          </p>
          <p className="mt-2">
            <strong>Proficiency display bug</strong> — only one proficiency shown in Esoteric Ebb
            despite selecting multiple at character creation. A save-file edit exists but is risky;
            waiting for an official Esoteric Ebb patch is recommended.
          </p>
        </RiskWarning>
      </section>
    </>
  )
}
