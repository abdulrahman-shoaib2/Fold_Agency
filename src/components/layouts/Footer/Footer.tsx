import Link from 'next/link'
import { links } from '@/constants/links'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-foreground">
      <div className="mx-auto max-w-350 px-8 pt-15 pb-8">
        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo scrolled={true}  />
            

            <p className="m-0 font-sans text-[13px] leading-[1.7] text-[#666]">
              Creative agency based in Berlin and New York. Est. 2013.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[9px] tracking-[0.2em] text-accent">
              PAGES
            </p>

            {links.map((p) => (
              <Link
                key={p.label}
                href={p.id}
                className="block py-1 font-sans text-sm capitalize text-[#666] transition-colors duration-150 hover:text-background"
              >
                {p.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="mb-4 font-mono text-[9px] tracking-[0.2em] text-accent">
              SERVICES
            </p>

            {[
              "Brand Strategy",
              "Visual Identity",
              "Digital Design",
              "Campaign",
              "Art Direction",
            ].map((s) => (
              <p
                key={s}
                className="mb-1.5 font-sans text-[13px] text-[#666]"
              >
                {s}
              </p>
            ))}
          </div>

          <div>
            <p className="mb-4 font-mono text-[9px] tracking-[0.2em] text-accent">
              CONTACT
            </p>

            <p className="m-0 font-sans text-[13px] leading-[1.8] text-[#666]">
              hello@fold.agency
              <br />
              +49 30 8844 2200
              <br />
              Berlin · New York
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-[#1e1e1e] pt-6">
          <span className="font-mono text-[9px] tracking-[0.15em] text-[#444]">
            © 2025 FOLD AGENCY — ALL RIGHTS RESERVED
          </span>

          <span className="font-mono text-[9px] tracking-[0.15em] text-[#444]">
            BERLIN · NEW YORK
          </span>
        </div>
      </div>
    </footer>
  )
}
