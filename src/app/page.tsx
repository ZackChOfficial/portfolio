import Image from "next/image";
import { Github, Linkedin, Instagram, FileText } from 'lucide-react';
import ShinyText from "../components/shiny-text";
import Experience from "@/components/experience";
import BlurText from "@/components/blur-text";
import Project from "@/components/project";
import Aurora from "../../aurora";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Aurora
  colorStops={["#0b4c6b", "#449e69", "#0b4c6b"]}
  amplitude={4.6}
  speed={1}
/>
    <div className="min-h-screen flex bg-slate-900 text-gray-300">
      
      {/* Vertical Navigation */}
      <div className="w-1/3 fixed p-16">
        <h1 className="text-4xl font-bold text-white"><BlurText text="Zakaria Chatouane" delay={50} animateBy="letters"direction="top"
/></h1>
        <h3 className="text-xl font-bold my-2">
        <BlurText text="Full Stack Engineer" delay={50} animateBy="letters"direction="top"
        />
        </h3>
        <BlurText className="text-lg text-gray-400 mb-24" text="I build accessible, pixel-perfect digital experiences for the web." delay={100} animateBy="words"direction="top" />
      <Navbar items={[
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
      ]} />
      </div>
      <div className="w-2/3 ml-[33%]">
      <div className="max-w-4xl mx-auto p-8 md:p-16">
        <p className="text-lg text-gray-400 mb-12 pt-4 animate-fade-in opacity-0 transition-opacity duration-1000" id="about">
        I’m a full stack engineer with five years of experience transforming ideas into robust, scalable applications. I specialize in crafting both backend and frontend solutions using Python, Django, TypeScript, Next.js, React Native, and Expo. My work is driven by a passion for clean, efficient code and an ever-evolving tech landscape. Beyond coding, I’m an avid reader of technical blogs, constantly exploring the latest trends and best practices to fuel my creativity and keep my skills sharp. This blend of hands-on expertise and a commitment to continuous learning ensures that every project I take on is built to excel in today’s dynamic digital environment.        </p>

        {/* Experiences Section */}
        <section className="mb-16 py-8 animate-fade-in opacity-0 transition-opacity duration-1000" id="experience">
          <Experience
            title="Team Lead @ Efficity"
            date="2023 — PRESENT"
            description="After two years, I was promoted to Team Lead, and I now manage a team of 6 members. Under my leadership, we have shipped several impactful business features that have positioned Efficity  as a market leader in the real estate sector.I also maintained and extended existing Elasticsearch integrations to power search functionalities in our Expo app, while Celery was implemented to manage asynchronous tasks (such as emailing, scripts, and push notifications...). In addition to my technical contributions, I actively participated in recruitment by conducting technical interviews.I focused on assessing candidates' expertise in Django, Python, React, and TypeScript, as well as their past achievements, to better gauge their seniority and fit within our team.I also ensured a smooth onboarding process for new members by guiding them through our internal processes, helping them navigate the codebase, and providing continuous support during their initial projects."
            technologies={['Django', 'TypeScript', 'React', 'Expo', 'Celery']} />
          
          <Experience
            title="Full-Stack Engineer @ Efficity"
            date="2021 — 2023"
            description="At Efficity, I began my journey as a Full Stack Engineer, where I contributed to building and enhancing end-to-end features using Python, Django, TypeScript, React, and Expo. One of my key achievements was modernizing our CRM by refactoring it to use React, which not only boosted user satisfaction with a modernized interface and improved UX but also laid the foundation for an internal components system based on atomic design. This project helped streamline our development process and ensure consistency across our applications."
            technologies={['Django', 'TypeScript', 'React', 'Expo', 'Celery']} />

          
        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 mb-8 animate-fade-in opacity-0 transition-opacity duration-1000" id="projects">

          <Project title="Build a Spotify Connected App" date="2021 — PRESENT" description="Web app for visualizing personalized Spotify data using the Spotify Web API. Features include the provision of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." technologies={['React', 'Express', 'Spotify API']} image="https://placehold.co/600x400/png" alt="Zack Portfolio" />
          <Project title="Build a Spotify Connected App" date="2021 — PRESENT" description="Web app for visualizing personalized Spotify data using the Spotify Web API. Features include the provision of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." technologies={['React', 'Express', 'Spotify API']} image="https://placehold.co/600x400/png" alt="Zack Portfolio" />
          <Project title="Build a Spotify Connected App" date="2021 — PRESENT" description="Web app for visualizing personalized Spotify data using the Spotify Web API. Features include the provision of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." technologies={['React', 'Express', 'Spotify API']} image="https://placehold.co/600x400/png" alt="Zack Portfolio" />
        </section>

        {/* Footer */}
        <footer className="text-sm text-center text-gray-500">
          <p>Lovingly designed in Figma and coded in Visual Studio Code.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
      </div>
    </div>
    </>
    );
}
