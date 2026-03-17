import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Companion Guide — Snell & Party Members | Esoteric Ebb',
  description:
    'Esoteric Ebb companion guide: Snell\'s role as your main partner, when to dismiss him (Sphinx Riddle), companion side-quests to complete before the Point of No Return.',
  keywords: [
    'esoteric ebb companions',
    'esoteric ebb snell',
    'esoteric ebb party',
    'esoteric ebb companion quests',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Esoteric Ebb Companion Guide — Snell & Party Members',
  description: 'Everything about Snell and companion mechanics in Esoteric Ebb.',
}

export default function CompanionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <span className="inline-block rounded bg-brand-gold/15 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            Companions
          </span>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-brand-text sm:text-4xl">
            Companion Guide — Snell &amp; Party
          </h1>
          <p className="mt-2 text-brand-muted">
            Snell is your primary companion. Knowing when to bring him — and when to go alone — is key.
          </p>
        </header>

        {/* Snell */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Snell — Your Main Partner</h2>
          <div className="mt-4 rounded-lg border border-brand-card bg-brand-surface p-5">
            <h3 className="font-display font-bold text-brand-gold">Role</h3>
            <p className="mt-1 text-sm text-brand-muted">
              Snell serves as your guide and quest-giver throughout the main story. He provides
              hints about where to go next and reacts to your decisions.
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-brand-card bg-brand-surface p-5">
            <h3 className="font-display font-bold text-brand-gold">When to Dismiss Snell</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-brand-muted list-disc list-inside">
              <li>
                <strong className="text-brand-text">Sphinx Riddle</strong> — you must visit
                The Drunk Sphinx <strong className="text-brand-text">alone</strong> (without Snell)
                to trigger the deep dialogue that starts the riddle
              </li>
              <li>
                Some NPCs have hidden dialogue options that only appear when Snell is not present
              </li>
            </ul>
          </div>
          <div className="mt-4 rounded-lg border border-brand-card bg-brand-surface p-5">
            <h3 className="font-display font-bold text-brand-gold">Star Witness Quest</h3>
            <p className="mt-1 text-sm text-brand-muted">
              On Day 3, Snell repeatedly tells you to explore City Below. If the quest log
              isn&apos;t updating, head to the <strong className="text-brand-text">NW section</strong> of
              City Below to find the hidden door. This is the #1 stuck-point in the game.
            </p>
          </div>
        </section>

        {/* Side-quests */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Companion Side-Quests</h2>
          <p className="mt-2 text-sm text-brand-muted">
            All companion side-quests must be completed <strong className="text-brand-text">before
            entering The Pillar</strong> (Point of No Return). Once you enter the endgame sequence,
            companion quests become permanently locked.
          </p>
          <p className="mt-3 rounded bg-brand-deep px-3 py-2 text-sm text-brand-gold">
            Tip: Create a manual save named &quot;Endgame_Backup&quot; before approaching The Pillar to
            preserve the option to finish companion content.
          </p>
        </section>

        {/* Charisma Interaction */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Charisma &amp; Companions</h2>
          <p className="mt-2 text-sm text-brand-muted">
            High Charisma lets you manipulate companion dialogue for different outcomes.
            Staying <strong className="text-brand-gold">Apolitical</strong> preserves the most
            companion interaction options across all factions.
          </p>
        </section>
      </article>
    </>
  )
}
