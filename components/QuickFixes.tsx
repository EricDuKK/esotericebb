import Link from 'next/link'

/**
 * 4 High-priority pain points from keywords.csv:
 *  1. esoteric ebb riddle / sphinx  -> Sphinx Riddle guide
 *  2. deck of many things           -> Sphinx Riddle guide (reward)
 *  3. esoteric ebb mage hand        -> Sphinx Riddle guide (cantrip)
 *  4. esoteric ebb sleep            -> Rest mechanics (homepage anchor)
 */
const fixes = [
  {
    keyword: 'Sphinx Riddle',
    desc: 'Cantrip order & Deck of Many Things reward',
    href: '/guides/sphinx-riddle',
    tag: 'Quest',
  },
  {
    keyword: 'Star Witness',
    desc: 'Find the hidden door in City Below NW',
    href: '/guides/star-witness',
    tag: 'Quest',
  },
  {
    keyword: 'Mage Hand',
    desc: 'How to get it & hidden bird-nest item',
    href: '/guides/sphinx-riddle#mage-hand',
    tag: 'Spell',
  },
  {
    keyword: 'Rest & Sleep',
    desc: 'Shrine locations, exhaustion & recovery',
    href: '#rest-mechanics',
    tag: 'Mechanics',
  },
]

export default function QuickFixes() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="font-display text-2xl font-bold text-brand-text">
        Quick Fixes
      </h2>
      <p className="mt-1 text-sm text-brand-muted">
        Top community pain-points — solved.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fixes.map((f) => (
          <Link
            key={f.keyword}
            href={f.href}
            className="group rounded-lg border border-brand-card bg-brand-surface p-5 transition-all hover:border-brand-gold/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-gold/5"
          >
            <span className="inline-block rounded bg-brand-gold/15 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-brand-gold">
              {f.tag}
            </span>
            <h3 className="mt-2 font-display text-lg font-bold text-brand-text group-hover:text-brand-gold transition-colors">
              {f.keyword}
            </h3>
            <p className="mt-1 text-sm text-brand-muted">{f.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
