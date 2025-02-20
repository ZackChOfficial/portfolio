import Experience from "@/components/experience";
import BlurText from "@/components/blur-text";
import Project from "@/components/project";
import Navbar from "@/components/navbar";
import Data from '@/app/data.json';
import Blog from "@/components/blog";
import SocialLinks from '@/components/social-links';
import MobileNav from "@/components/mobile-nav";

export default async function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
        <MobileNav items={[
          { name: 'About', href: '#about' },
          { name: 'Experience', href: '#experience' },
          { name: 'Projects', href: '#projects' },
          { name: 'Blog', href: '#blog' },
        ]} />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar/Header Section */}
        <div className="w-full md:w-1/3 md:fixed p-4 md:p-16 pt-20 md:pt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <BlurText text={Data.name} delay={50} animateBy="letters" direction="top" />
          </h1>
          <h3 className="text-lg md:text-xl font-bold my-2">
            <BlurText text={Data.title} delay={50} animateBy="letters" direction="top" />
          </h3>
          <BlurText 
            className="text-base md:text-lg text-gray-400 mb-8 md:mb-24" 
            text={Data.tagline} 
            delay={100} 
            animateBy="words" 
            direction="top" 
          />
          {/* Mobile Social Links */}
          <div className="md:hidden mb-8">
              <SocialLinks />
          </div>
          <div className="hidden md:block">
            <Navbar items={[
              { name: 'About', href: '#about' },
              { name: 'Experience', href: '#experience' },
              { name: 'Projects', href: '#projects' },
              { name: 'Blog', href: '#blog' },
            ]} />
            <SocialLinks />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 md:ml-[33%] px-4 md:px-0">
          <div className="max-w-4xl mx-auto py-8 md:p-16">
          <h2 className="text-xl md:text-2xl font-bold text-white" id="about" >About Me</h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 pt-4 animate-fade-in opacity-0 transition-opacity duration-1000">
              {Data.about}
            </p>

            {/* Experiences Section */}
            <section className="mb-8 md:mb-16 animate-fade-in opacity-0 transition-opacity duration-1000" id="experience">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Experience</h2>
              {Data.experiences.map((experience, index) => (
                <Experience
                  key={index}
                  title={experience.title}
                  date={experience.date}
                  description={experience.description}
                  technologies={experience.technologies}
                />
              ))}
            </section>

            {/* Projects Section */}
            <section className="mb-8 md:mb-16 animate-fade-in opacity-0 transition-opacity duration-1000" id="projects">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Projects</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {Data.projects.map((project, index) => (
                  <Project
                    key={index}
                    title={project.title}
                    date={project.date}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    alt={project.alt}
                  />
                ))}
              </div>
            </section>

            {/* Blog Section */}
            <section className="mb-16 py-8 animate-fade-in opacity-0 transition-opacity duration-1000" id="blog">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Latest Posts</h2>
              <div className="grid grid-cols-1 gap-6">
                {Data.blogs.map((post, index) => (
                  <a key={index} href={post.link} className="block">
                    <Blog {...post} />
                  </a>
                ))}
              </div>
            </section>



            {/* Footer */}
            <footer className="text-sm text-center text-gray-500 py-8">
              <p>Built with Next.js and Tailwind CSS.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}