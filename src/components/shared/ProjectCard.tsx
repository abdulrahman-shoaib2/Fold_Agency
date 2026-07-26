import Image from 'next/image'
import React from 'react'

export default function ProjectCard({ project }: { project: any }) {
  return (

    <div
      key={project.title}
      className="group cursor-pointer border-0  md:border-3 md:border-l-0 md:border-t-0 h-full! overflow-hidden md:last-of-type:border-0! bg-background transition-colors  hover:bg-accent"
    >
      <div
        className={`overflow-hidden max-h-75 min-h-75 bg-[#e0dedc] ${project.size === "large" ? "h-80" : "h-60"
          }`}
      >
        <Image
          width={500}
          height={300}
          priority
          className="h-full w-full object-cover grayscale-[10%] transition-transform duration-500 group-hover:scale-105"
          src={`https://images.unsplash.com/${project.img}?w=500&h=300&fit=crop&auto=format`}
          alt={project.title}
        />

      </div>

      <div className="border-t border-ink px-5 pt-[18px] pb-[22px]">
        <div className="mb-[10px] flex justify-between">
          <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
            {project.cat.toUpperCase()}
          </span>

          <span className="font-mono text-[9px] text-muted-foreground">
            {project.location} · {project.year}
          </span>
        </div>

        <p className="font-display text-[clamp(20px,2.5vw,26px)] font-black uppercase leading-[1.1] tracking-[-0.01em]">
          {project.title}
        </p>
      </div>
    </div>

  )
}
