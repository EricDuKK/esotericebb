import RiskWarning from '@/components/RiskWarning'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Star Witness (Day 3) Walkthrough — Esoteric Ebb Guide',
  description:
    'Stuck on the Star Witness quest in Esoteric Ebb? Find the hidden door in City Below NW, learn the Detect Secret spell shortcut, and avoid the Point of No Return.',
  keywords: [
    'esoteric ebb walkthrough',
    'esoteric ebb star witness',
    'city below hidden door',
    'esoteric ebb detect secret',
    'esoteric ebb point of no return',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Complete the Star Witness Quest in Esoteric Ebb',
  description: 'Find the hidden door in City Below and progress the Star Witness quest on Day 3.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Go to City Below NW',
      text: 'Head to the northwest section of City Below where the hidden door is located.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '(Optional) Learn Detect Secret',
      text: 'Visit the Goblin Underground Garden (central pool landmark), go west to find the Underdwarf, and complete their task to learn Detect Secret.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Find the hidden entrance',
      text: 'Cast Detect Secret in the NW corner to reveal the hidden entrance, or explore carefully to find the door manually.',
    },
  ],
}

export default function StarWitnessPage() {
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
            Star Witness — Day 3 Walkthrough
          </h1>
          <p className="mt-2 text-brand-muted">
            Snell keeps telling you to explore City Below but nothing happens? Here&apos;s how to progress.
          </p>
        </header>

        {/* Symptom */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">The Problem</h2>
          <p className="mt-2 text-sm text-brand-muted">
            On Day 3, Snell repeatedly reminds you to explore City Below, but the quest log doesn&apos;t update.
            This is the single most common stuck-point reported by the community.
          </p>
        </section>

        {/* Solution */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Solution</h2>
          <ol className="mt-4 space-y-4">
            {[
              {
                step: 1,
                title: 'Head to City Below — Northwest',
                detail: 'There is a hidden door in the NW section of City Below that leads deeper underground.',
              },
              {
                step: 2,
                title: '(Optional) Learn Detect Secret',
                detail:
                  'Visit the Goblin Underground Garden (landmark: central pool). Walk west and find the Underdwarf. Complete their task to learn the Detect Secret spell.',
              },
              {
                step: 3,
                title: 'Reveal the hidden entrance',
                detail:
                  'Cast Detect Secret in the NW corner to instantly reveal the entrance. Without the spell, you can still find it by pixel-hunting along the walls.',
              },
            ].map((s) => (
              <li key={s.step} className="flex gap-4 rounded-lg border border-brand-card bg-brand-surface p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 font-display text-sm font-bold text-brand-gold">
                  {s.step}
                </span>
                <div>
                  <p className="font-medium text-brand-text">{s.title}</p>
                  <p className="mt-0.5 text-sm text-brand-muted">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Navigation tips */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Navigation Tips</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted list-disc list-inside">
            <li>Press <strong className="text-brand-text">Journal</strong> to see all discovered doors and connections — the closest thing to a map.</li>
            <li>Use <strong className="text-brand-text">Behold</strong> to scan for hidden shortcuts — it works as an environmental radar.</li>
          </ul>
        </section>

        {/* Point of No Return */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Point of No Return</h2>
          <RiskWarning title="Endgame Warning">
            Entering <strong>The Pillar</strong> triggers the endgame sequence and you{' '}
            <strong>cannot return</strong>. Before going in:
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Confirm you have the Deck of Many Things (if desired).</li>
              <li>Complete all companion side-quests.</li>
              <li>Create a manual save named <code className="rounded bg-brand-deep px-1.5 py-0.5 text-brand-gold">&quot;Endgame_Backup&quot;</code>.</li>
            </ul>
          </RiskWarning>
        </section>

        {/* Speak with Dead */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text">Speak with Dead — Don&apos;t Bother on Day 1</h2>
          <p className="mt-2 text-sm text-brand-muted">
            <strong className="text-brand-text">Speak with Dead</strong> requires a level-3 spell slot (player level 5+).
            On Day 1 you won&apos;t have it. Even if you could cast it, the body is removed by elves as part of the story — the corpse disappearing is <em>not</em> a bug.
          </p>
        </section>
      </article>
    </>
  )
}
