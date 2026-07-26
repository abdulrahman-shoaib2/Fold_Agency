import Link from 'next/link'

export default function Logo({scrolled}: {scrolled?: boolean}) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 cursor-pointer p-0"
    >
      <span
        className={`font-display text-[22px] font-black leading-none tracking-tight ${ scrolled ? "text-background" : "text-ink"
          }`}
      >
        FOLD
      </span>

      <span className="block h-1.5 w-1.5 shrink-0 -ml-2.5 mt-2 bg-accent" />

      <span
        className={`font-mono text-[10px] font-bold tracking-tight ${ scrolled ? "text-accent" : "text-muted"
          }`}
      >
        AGENCY
      </span>
    </Link>
  )
}
