"use client";
import Headline from '@/components/shared/Headline';
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col content-end relative overflow-hidden pb-20 bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          width={1600}
          height={1000}
          quality={100}
          priority
          className="w-full h-full object-cover opacity-18 pointer-events-none select-none"
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1000&fit=crop&auto=format"
          alt="Creative agency workspace"
          />
      </div>

      <div className="relative px-24 mt-20">
        {/* Top label row */}
        <div className=" flex justify-between items-end  pb-0 z-1 animate-translate-down">
          <span className="text-[10px] tracking-tight font-mono text-muted-foreground" >EST. 2013 — BERLIN</span>
          <span className="text-[10px] tracking-tight font-mono text-muted-foreground mr-5" >CREATIVE AGENCY</span>
        </div>

        {/* Main headline */}
        <div className="relative z-1  mb-25 w-full max-w-350 ">
        <Headline label="WE MAKE THINGS PEOPLE REMEMBER" mainText={{ before: "Creative", highlight: "Studio", after: "That Builds" }} labelClasses='animate-translate-down inline-block [animation-delay:100ms]' mainClasses={{main:'animate-translate-down [animation-delay:200ms]',highlight:'opacity-0 animate-enterFromLeft [animation-delay:250ms] inline-block '}} />

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              className="bg-accent text-ink font-mono text-xs font-medium tracking-[0.12em] px-9 py-4 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              SEE OUR WORK
            </button>

            <Link
              href="/work"
              className="font-mono text-xs tracking-[0.12em] text-muted no-underline px-9 py-4 cursor-pointer border border-transparent hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            >
              VIEW ALL PROJECTS
              <ArrowRight />
            </Link>

          </div>
        </div>

      </div>

    </section>)
}
