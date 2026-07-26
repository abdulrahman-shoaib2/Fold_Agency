"use client";
import { motion } from "motion/react";

import { stats } from '../../constants/stats';
export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <section className="bg-foreground border-b border-accent">
        <div className="mx-auto grid max-w-350 grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-px bg-[#1a1a1a] px-8 py-20">
          {stats.map((s) => (
            <div
              key={s.val}
              className="bg-foreground px-8 py-12 text-center"
            >
              <div className="mb-3 font-display text-[clamp(52px,7vw,88px)] font-black leading-none text-accent">
                {s.val}
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666666]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
