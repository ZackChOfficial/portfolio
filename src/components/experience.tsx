"use client"
import React from 'react'
import ShinyText from './shiny-text'
import SpotlightCard from './spotlight-card';

type ExperienceProps = {
    title: string;
    date: string;
    description: string;
    technologies: string[];
}

function Experience({ title, date, description, technologies }: ExperienceProps) {
  return (
        <SpotlightCard className="mb-8 md:mb-12 bg-slate-900 p-4 md:p-8" spotlightColor="rgba(0, 229, 255, 0.2)">

        <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl text-white">{title}</h3>
        <span className="text-sm">{date}</span>
        </div>
        <p className="text-sm leading-relaxed mb-4">
            {description}
        </p>
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
                <span className="px-3 py-1 text-sm bg-slate-800 rounded-full" key={index}><ShinyText text={tech} disabled={false} speed={3}/></span>
            ))}
        </div>
        </SpotlightCard>
  )
}

export default Experience