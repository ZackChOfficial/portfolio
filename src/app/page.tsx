import Hero from '../components/Hero'
import Image from 'next/image'
import background from 'public/images/background.png'
import Projects from '@/components/Projects'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-4 sm:px-0 md:px-50 lg:px-[300px]" id="home">
      <Image
            className="absolute top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none -z-20 opacity-50 backdrop-blur-[130px]"
            src={background}
            alt="Background Picture"
            priority
            />
      <Navbar />
      <Hero />
      
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  )
}
