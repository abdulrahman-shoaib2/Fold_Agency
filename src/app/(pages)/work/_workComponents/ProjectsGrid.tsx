"use client"
import { useState } from 'react'
import { projects } from '../../../../constants/projects'
import ProjectCard from '@/components/shared/ProjectCard'

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Identity', 'Digital', 'Print', 'Campaign']
  const visible = activeFilter === 'All' ? projects : projects.filter(p => p.cat === activeFilter)


  return (
    <>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-5 justify-between px-[2.5%] py-8">
        <div className="flex flex-wrap justify-center md:justify-between gap-0.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`border px-[18px] py-2 font-mono text-[11px] tracking-[0.12em] transition-colors duration-150 ${activeFilter === f
                ? "border-foreground bg-foreground text-background"
                : "border-gray-300 text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
          {visible.length} / {projects.length} PROJECTS
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-[1400px] px-8 pb-[100px]">
        <div className="mt-0.5 grid grid-cols-1 md:outline-3 md:outline-background md:-outline-offset-3 bg-ink md:grid-cols-2 xl:grid-cols-4">
          {visible.length > 0 ? visible.map((p) => (
            <ProjectCard key={p.title} project={p} />

          )) : (
            <div className="py-20 text-center font-mono text-xs tracking-[0.2em] text-muted-foreground">
              NO PROJECTS IN THIS CATEGORY
            </div>
          )}
        </div>
      </div>

    </>
  )
}
