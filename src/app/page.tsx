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
        <h1 className="text-4xl font-bold text-white"><BlurText text="Zakaria Chatouane" delay={80} animateBy="letters"direction="top"
/></h1>
        <h3 className="text-xl font-bold my-2">
        <BlurText text="Full Stack Engineer" delay={80} animateBy="letters"direction="top"
        />
        </h3>
          <BlurText className="text-lg text-gray-400 mb-24" text="I build accessible, pixel-perfect digital experiences for the web." delay={200} animateBy="words"direction="top" />
      <Navbar items={[
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]} />
      </div>
      <div className="w-2/3 ml-[33%]">
      <div className="max-w-4xl mx-auto p-8 md:p-16">
        <p className="text-lg text-gray-400 mb-12" id="about">
        I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility.
        </p>

        {/* Experience Section */}
        <section className="mb-16" id="experience">
          <Experience
            title="Senior Frontend Engineer, Accessibility @ Klaviyo"
            date="2021 — PRESENT"
            description="Built and deployed core components while advocating Klaviyo's accessibility initiatives. Collaborated with cross-functional teams, including developers, designers, and product managers, to implement and educate on best practices in web accessibility."
            technologies={['JavaScript', 'TypeScript', 'React', 'Storybook']} />
          
          <Experience
            title="Senior Frontend Engineer, Accessibility @ Klaviyo"
            date="2021 — PRESENT"
            description="Built and deployed core components while advocating Klaviyo's accessibility initiatives. Collaborated with cross-functional teams, including developers, designers, and product managers, to implement and educate on best practices in web accessibility."
            technologies={['JavaScript', 'TypeScript', 'React', 'Storybook']} />

          {/* Projects Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects">
          <Project title="Build a Spotify Connected App" date="2021 — PRESENT" description="Web app for visualizing personalized Spotify data using the Spotify Web API. Features include the provision of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." technologies={['React', 'Express', 'Spotify API']} image="https://placehold.co/600x400/png" alt="Zack Portfolio" />
          <Project title="Build a Spotify Connected App" date="2021 — PRESENT" description="Web app for visualizing personalized Spotify data using the Spotify Web API. Features include the provision of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." technologies={['React', 'Express', 'Spotify API']} image="https://placehold.co/600x400/png" alt="Zack Portfolio" />
          <Project title="Build a Spotify Connected App" date="2021 — PRESENT" description="Web app for visualizing personalized Spotify data using the Spotify Web API. Features include the provision of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." technologies={['React', 'Express', 'Spotify API']} image="https://placehold.co/600x400/png" alt="Zack Portfolio" />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-center text-gray-500" id="contact">
          <p>Lovingly designed in Figma and coded in Visual Studio Code.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
      </div>
    </div>
    </>
    );
}
