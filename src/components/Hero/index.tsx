import Image from 'next/image'
import profilePic from 'public/images/pf.jpeg'
import LinkedinIcon from '../icons/linkedin'
import LinkWithIcon from '../LinkWithIcon'
import GithubIcon from '../icons/github'
import TwitterIcon from '../icons/twitter'
import HashnodeIcon from '../icons/hashnode'

export default function Hero(): JSX.Element {
    return  <div className="justify-start mt-4 bg-transparent sm:text-center sm:justify-center flex  items-start flex-wrap w-full">
                <div className='w-full md:flex items-center'>
                <Image
                className='rounded-full h-20 w-20 sm-mx-auto mx-auto md:mx-8 my-4 ring-2 ring-blue-500 ring-offset-4 ring-offset-slate-800'
                src={profilePic}
                alt="Profile Picture"
                placeholder="blur"
                />
                <div className='w-full text-center md:text-left sm:text-center sm-mx-auto'>
                    <h1 className='w-full text-4xl font-bold text-slate-100'>Zakaria Chatouane</h1>
                    <h3 className='w-full text-lg text-slate-400 py-1 font-normal'>Full-stack Developer • Tech Enthusiast</h3>
                </div>
                </div>
                <p className='md:indent-36 text-xl text-slate-200 text-justify py-1 pt-2 font-light px-2'>Experienced Full Stack Developer proficient in React and Django, specializing in building robust web applications. Skilled in creating seamless user experiences, designing RESTful APIs, and collaborating with cross-functional teams.</p>
                <div className='text-lg my-4 w-full justify-between flex flex-wrap align-middle'>
                    <LinkWithIcon Icon={LinkedinIcon} color='#0072b1' href='https://www.linkedin.com/in/zakch/' >Linkedin</LinkWithIcon>
                    <LinkWithIcon Icon={GithubIcon} color='#ffffff' href='https://www.linkedin.com/in/zakch/' >Github</LinkWithIcon>
                    <LinkWithIcon Icon={TwitterIcon} color='#1ea1f1' href='https://www.linkedin.com/in/zakch/' >Twitter</LinkWithIcon>
                    <LinkWithIcon Icon={HashnodeIcon} color='#2862ff' href='https://www.linkedin.com/in/zakch/' width={24} heigth={24} >Hashnode</LinkWithIcon>
                </div>
            </div>
}