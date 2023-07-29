"use client"
import Image from 'next/image'
import GithubIcon from '../icons/github'
import Link from 'next/link'

const imageLoader = ({ src, width, quality }: {src: string, width: number, quality?: number}): string => {
  return `https://placehold.co/${src}`
}

export type ProjectProps = {
  name: string,
  imagePath: string,
  description: string,
  url: string
}
export default function Project({name, imagePath, description, url}:ProjectProps): JSX.Element {
  return <div className="fcursor-pointer lex w-full flex-col justify-center align-middle relative transition duration-300 p-2 my-2 group hover:ring-2 hover:ring-[#3c65a67a] rounded-md">
    <span className="w-full h-full absolute transition duration-300 top-0 bg-transparent left-0 group-hover:bg-[#293b5775] -z-10 backdrop-blur-lg rounded-md"></span>
    <Image className='w-full rounded-md' loader={imageLoader} src={imagePath} alt={name} width={250} height={100}/>
    <h3 className='text-xl text-slate-100 w-full pt-4'>{name}</h3>
    <p className='text-slate-400 text-justify'>{description}</p>
    <div  className={`flex  ease-in-out duration-200 transition items-middle font-normal w-full text-white justify-center pt-4`} >
        <GithubIcon width={32} height={32} fill="#fff" className='mr-2'/>
        <Link href={url} target='_blank' className='text-slate-300 hover:underline underline-offset-4 hover:text-slate-50'>Learn More</Link>
    </div>
  </div>  
}