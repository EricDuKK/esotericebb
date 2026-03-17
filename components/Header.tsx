import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/guides/sphinx-riddle', label: 'Sphinx Riddle' },
  { href: '/guides/star-witness', label: 'Star Witness' },
  { href: '/guides/stats-and-build', label: 'Builds' },
  { href: '/guides/sleep-and-rest', label: 'Rest' },
  { href: '/guides/mage-hand', label: 'Mage Hand' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-card/60 bg-brand-deep/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-display text-lg font-bold tracking-wide text-brand-gold">
          Esoteric&nbsp;Ebb
        </Link>
        <nav className="flex gap-4 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-muted transition-colors hover:text-brand-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
