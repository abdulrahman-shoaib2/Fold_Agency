"use client";
import { motion } from "motion/react";

import { services } from '../../constants/services'

export default function Services() {

  return (

    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <section className="bg-background border-b border-ink">
        <div className="mx-auto max-w-350 px-8 pt-20">
          <div className="mb-0 flex items-start justify-between  pb-6">
            <h2 className="font-display m-0 text-[clamp(36px,5vw,64px)] font-black uppercase tracking-[-0.02em]">
              What We Do
            </h2>

            <span className="font-mono pt-2 text-[10px] tracking-[0.2em] text-muted-foreground">
              05 DISCIPLINES
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-350 px-8 pb-20">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`grid cursor-default grid-cols-[60px_1fr_auto] items-center gap-8 border-b border-ink -mx-8 px-8 py-7 transition-colors duration-150 bg-transparent hover:bg-accent group`}
            >
              <span
                className={`font-mono text-[11px] tracking-widest text-muted-foreground group-hover:text-foreground`}
              >
                {s.n}
              </span>

              <span className="font-display text-[clamp(26px,3.5vw,44px)] font-black uppercase tracking-[-0.02em] text-foreground">
                {s.name}
              </span>

              <span
                className={`hidden max-w-65 text-right font-sans text-sm lg:block text-muted-foreground group-hover:text-foreground`}
              >
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </section>
    </motion.section>

  )
}
