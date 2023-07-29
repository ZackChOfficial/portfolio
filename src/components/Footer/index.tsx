"use client"
import Link from 'next/link'
import LinkedinIcon from '../icons/linkedin'
import GithubIcon from '../icons/github'
import TwitterIcon from '../icons/twitter'
import HashnodeIcon from '../icons/hashnode'
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'
import FooterIcon from "./footerIcon"

const getColor = (isHover: boolean, link: "linkedin" | "github" | "twitter" | "hashnode"): string => {
    const colors = {
        "linkedin": "#0072b1",
        "github": "#ffffff",
        "twitter": "#1ea1f1",
        "hashnode": "#2862ff"
    }
    if (!isHover) return "#bdc8d5"

    return colors[link]
}
export default function Footer():JSX.Element {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)

    return <div className="flex place-content-between items-center mt-10 text-slate-100 w-full">
        <h4 className='text-slate-200'>© Made by <b>Zack</b></h4>
        <div className='items-start justify-end flex flex-row '>
            <FooterIcon className='mt-1' href='https://www.linkedin.com/in/zakch/' Icon={GithubIcon} color='#ffffff'/>
            <FooterIcon href='https://www.linkedin.com/in/zakch/' Icon={LinkedinIcon} color='#0072b1' width={32} height={32}/>
            <FooterIcon className='mt-1' href='https://www.linkedin.com/in/zakch/' Icon={TwitterIcon} color='#1ea1f1' width={32} height={32}/>
            <FooterIcon className='mt-1' href='https://www.linkedin.com/in/zakch/' Icon={HashnodeIcon} color='#2862ff' width={24} height={24}/>
        </div>
    </div>
}