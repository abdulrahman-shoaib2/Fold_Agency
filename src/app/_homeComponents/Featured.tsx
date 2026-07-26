"use client";
import { motion } from "motion/react";

import ProjectCard from "@/components/shared/ProjectCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Featured() {
  return (
      <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <section className="bg-background border-b border-ink">
        <div className="mx-auto max-w-350 px-8 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display m-0 text-[clamp(36px,5vw,64px)] font-black uppercase tracking-[-0.02em]">
              Recent Work
            </h2>

            <Link
              href="/work"
              className="font-mono border border-ink bg-transparent px-5 py-2.5 text-[11px] tracking-[0.12em] text-foreground transition-colors duration-150 hover:bg-foreground hover:text-white flex items-center gap-2"
            >
              ALL PROJECTS <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:outline-3 md:outline-background md:-outline-offset-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Kova Brewing Co.",
                cat: "Brand Identity",
                img: "photo-1558618666-fcd25c85cd64",
                year: "2024",
              },
              {
                title: "Meridian Capital",
                cat: "Digital",
                img: "photo-1467232004584-a241de8bcf5d",
                year: "2024",
              },
              {
                title: "Studio Brecht",
                cat: "Identity + Print",
                img: "photo-1542744094-3a31f272c490",
                year: "2023",
              },
              {
                title: "Hafen Festival",
                cat: "Campaign",
                img: "photo-1540575467063-178a50c2df87",
                year: "2023",
              },
            ].map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  )
}
