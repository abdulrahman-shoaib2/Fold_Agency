"use client"
import { useState } from 'react';
import { BG, INK, ACID, MUTED } from './../../../constants/colors';
import { Page } from '../../../types/data/PageType';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import {links} from '@/constants/links';
import useCheckScroll from '@/hooks/useCheckScroll';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useCheckScroll();
  const pathname = usePathname();
  const isActive = (link: { id: Page; label: string }) => (pathname.includes(link.id) && link.id != "/") || link.id == pathname;

  return (
    <header className='fixed top-0 left-0 right-0 z-100 transition-all duration-250 animate-translate-down' style={{ background: scrolled ? INK : 'transparent', borderBottom: scrolled ? `1px solid var(--color-accent)` : 'none' }}>
      <div className="max-w-350 mx-auto px-8 flex items-center justify-between h-16">
        <Logo scrolled={scrolled} />

        <nav  className="hidden-mobile flex gap-0.5">
          {links.map((l, index) => (
            <Link href={l.id} key={"link-" + index}
              className={`text-[11px] font-bold tracking-tight border-none cursor-pointer px-4 py-1.5 transition-all duration-150  ${isActive(l)?'':"hover:text-accent!"}  font-mono`}
              style={{
                color: isActive(l) ?  INK : (scrolled ? '#aaa' : MUTED),
                background: isActive(l) ? ACID : 'transparent',
              }}
              onMouseEnter={e => { if (!isActive(l)) e.currentTarget.style.color = scrolled ? BG : INK }}
              onMouseLeave={e => { if (!isActive(l)) e.currentTarget.style.color = scrolled ? '#aaa' : MUTED }}
            >{l.label.toUpperCase()}</Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{ display: 'none' }}
          className="show-mobile bg-none border-none cursor-pointer p-2"
        >
          <div className="w-6 h-0.5 transition-all duration-200 mb-1.25" style={{ background: scrolled ? BG : INK,  transform: open ? 'rotate(45deg) translate(6px,6px) ' : 'none' }} />
          <div className="w-6 h-0.5 transition-all duration-100 mb-1.25" style={{ background: scrolled ? BG : INK, opacity: open ? 0 : 1}} />
          <div className="w-6 h-0.5 transition-all duration-200 bg-accent" style={{ background: scrolled ? BG : INK,  transform: open ? 'rotate(-45deg) translate(4px,-4px) ' : 'none' }} />
        </button>
      </div>
      {open && (
        <div className="none bg-foreground border-t border-accent show-mobile"  >
          {links.map(l => (
            <Link href={l.id} onClick={() => {  setOpen(false) }} key={"link-mobile-" + l.id}
              className="block w-full text-left px-8 py-4.5 bg-none border-none cursor-pointer font-mono text-[13px] tracking-[0.15em]"
              style={{
              color: isActive(l) ? ACID : BG,
              }}>{l.label.toUpperCase()}</Link>
          ))}
        </div>
      )}

    </header>
  )
}
