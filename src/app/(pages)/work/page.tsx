import Headline from '@/components/shared/Headline'
import Link from 'next/link'
import ProjectsGrid from './_workComponents/ProjectsGrid'

export default function WorkPage() {

  return (
    <main className='p-16 bg-background min-h-screen'>
      {/* Header */}
      <div className="mx-auto max-w-350 border-b border-foreground px-8 pt-20 pb-10">
        <div className="flex flex-wrap flex-col items-start justify-between gap-8">
          <Headline label="SELECTED WORK" mainText={{ before: "Our", highlight: "Projects" }} labelClasses='mb-4 block font-mono text-[10px] tracking-[0.25em] text-muted-foreground' mainClasses={{ main: "font-display text-[clamp(52px,8vw,110px)]! text-black uppercase leading-[0.9] tracking-[-0.04em] ", highlight: "text-muted-foreground" }} />
        </div>
      </div>

      <ProjectsGrid />

      <div className="mx-auto flex max-w-350 flex-wrap items-center justify-between gap-6 border-t border-ink px-8 py-[60px]">
        <p className="font-display text-[clamp(24px,4vw,42px)] font-black uppercase tracking-[-0.02em]">
          Want to be next?
        </p>

        <Link
          href="/contact"
          className="bg-accent px-9 py-4 font-mono text-xs tracking-[0.12em] text-foreground transition-opacity hover:opacity-85"
        >
          <span>START A PROJECT</span>
        </Link>
      </div>

    </main>
  )
}
