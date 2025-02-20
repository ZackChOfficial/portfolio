import { Github, Linkedin, Instagram, FileText } from 'lucide-react';
import Experience from "@/components/experience";
import BlurText from "@/components/blur-text";
import Project from "@/components/project";
import Navbar from "@/components/navbar";
import Data from '@/app/data.json';
import Blog from "@/components/blog";

export default async function Home() {
  return (
    <div className="min-h-screen flex bg-slate-900 text-gray-300">
      {/* Vertical Navigation */}
      <div className="w-1/3 fixed p-16">
        <h1 className="text-4xl font-bold text-white"><BlurText text={Data.name} delay={50} animateBy="letters"direction="top" /></h1>
        <h3 className="text-xl font-bold my-2">
          <BlurText text={Data.title} delay={50} animateBy="letters"direction="top" />
        </h3>
        <BlurText className="text-lg text-gray-400 mb-24" text={Data.tagline} delay={100} animateBy="words"direction="top" />
        <Navbar items={[
          { name: 'About', href: '#about' },
          { name: 'Experience', href: '#experience' },
          { name: 'Projects', href: '#projects' },
          { name: 'Blog', href: '#blog' },
        ]} />
      </div>
      <div className="w-2/3 ml-[33%]">
      <div className="max-w-4xl mx-auto p-8 md:p-16">
        <p className="text-lg text-gray-400 mb-4 pt-4 animate-fade-in opacity-0 transition-opacity duration-1000" id="about">
          {Data.about}
        </p>
        {/* Experiences Section */}
        <section className="mb-4 animate-fade-in opacity-0 transition-opacity duration-1000" id="experience">
        <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>

          {Data.experiences.map((experience, index) => (
            <Experience
              key={index}
              title={experience.title}
              date={experience.date}
              description={experience.description}
              technologies={experience.technologies} />
          ))}
        </section>

        {/* Projects Section */}
        <section className="mb-8 animate-fade-in opacity-0 transition-opacity duration-1000" id="projects">
          <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {Data.projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              alt={project.alt} />
          ))}
          </div>
        </section>

        <section className="mb-16 py-8 animate-fade-in opacity-0 transition-opacity duration-1000" id="blog">
      <h2 className="text-2xl font-bold text-white mb-8">Latest Posts</h2>
      <div className="grid grid-cols-1 gap-6">
        {Data.blogs.map((post, index) => (
          <a key={index} href={post.link} className="block">
            <Blog {...post} />
          </a>
        ))}
      </div>
    </section>

        {/* Footer */}
        <footer className="text-sm text-center text-gray-500">
          <p>Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
      </div>
    </div>
    );
}
