"use client";
import { motion } from "motion/react";
import Headline from "@/components/shared/Headline";
import Link from "next/link";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <section className="border-b border-foreground bg-accent px-8 py-30 text-center">
        <Headline
          label="CURRENTLY ACCEPTING NEW CLIENTS"
          mainText={{ before: "Ready to", highlight: "stand out?" }}
          labelClasses="mb-6 font-mono text-[11px] tracking-[0.25em] text-foreground opacity-50 selection:bg-black! selection:text-accent!"
          mainClasses={{ main: "mb-12 font-display text-[clamp(48px,8vw,120px)]! font-black uppercase leading-[0.9] tracking-[-0.04em] text-foreground selection:bg-black! selection:text-accent!", highlight: "italic text-black" }}
        />

        <div className="transition-transform duration-200 hover:-translate-y-1">
          <Link
            href="/contact"
            className="cursor-pointer bg-foreground px-12 py-4.5 font-mono text-xs tracking-[0.15em] text-accent  "
          >
            LET'S TALK
          </Link>
        </div>
      </section>
    </motion.section>
  )
}
