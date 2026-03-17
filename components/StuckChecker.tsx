'use client'

import { useState } from 'react'

const issues = [
  {
    id: 'hidden-door',
    label: 'Day 3: Can\'t find the hidden door',
    solution: [
      'Head to City Below — Northwest (NW) section. There is a hidden door leading deeper underground.',
      'Advanced method: Visit the Goblin Underground Garden (landmark: central pool), go west and find the Underdwarf. Complete their task to learn the Detect Secret spell.',
      'Cast Detect Secret in the NW corner to reveal the entrance instantly.',
    ],
  },
  {
    id: 'speak-dead',
    label: 'Speak with Dead keeps failing',
    solution: [
      'Speak with Dead requires a level-3 spell slot — you need to be at least player level 5.',
      'On Day 1 your level is too low, so the spell will always fail. This is by design, not a bug.',
      'The body being taken away is a story event (elves remove it). Even a successful cast cannot prevent the corpse from disappearing.',
    ],
  },
  {
    id: 'frozen-sprout',
    label: 'Frozen Sprout dialogue error',
    solution: [
      'This is a confirmed bug: using Druidcraft triggers "frozen sprout errored out".',
      'Workaround: Skip this NPC for now and complete other side-quests first.',
      'Official hotfixes typically drop around 10:00 CET — check Steam patch notes for updates.',
    ],
  },
]

export default function StuckChecker() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="font-display text-2xl font-bold text-brand-text">
        Stuck? Check Here
      </h2>
      <p className="mt-1 text-sm text-brand-muted">
        Click your problem — get the fix.
      </p>

      <div className="mt-6 space-y-3">
        {issues.map((issue) => {
          const isOpen = activeId === issue.id
          return (
            <div key={issue.id} className="rounded-lg border border-brand-card bg-brand-surface overflow-hidden">
              <button
                onClick={() => setActiveId(isOpen ? null : issue.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-brand-card/50"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-brand-text">{issue.label}</span>
                <span
                  className="ml-3 shrink-0 text-brand-muted transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-brand-card px-5 py-4">
                  <ol className="space-y-2 text-sm text-brand-muted list-decimal list-inside">
                    {issue.solution.map((step, i) => (
                      <li key={i} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
