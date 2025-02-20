import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import ShinyText from './shiny-text'
import StarBorder from './star-border'

type BlogProps = {
  title: string
  date: string
  excerpt: string
  readTime: number
  tags: string[]
  link: string
}

function Blog({ title, date, excerpt, readTime, tags, link }: BlogProps) {
  return (
    <StarBorder as="div" className="hover:scale-105 transition-transform duration-500 ease-in-out"  color="cyan" speed="5s">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
        {title}
      </h3>
      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
    </div>
    <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime} min read</span>
      </div>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400"
          >
            <ShinyText text={tag} disabled={false} speed={3}/>
          </span>
        ))}
      </div>
    </div>
  </StarBorder>
  )
}

export default Blog