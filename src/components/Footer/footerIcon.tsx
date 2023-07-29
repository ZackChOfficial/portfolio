"use client"
import Link from 'next/link'
import { ComponentType, useRef } from 'react'
import { useHover } from 'usehooks-ts'

export type FooterIconProps = {
    Icon:ComponentType<React.SVGProps<SVGSVGElement>>;
    color:string;
    href: string;
    width?: number;
    height?: number;
    className?: string;
}
export default function FooterIcon({Icon, color, href, width = 28, height = 28, className = ""}: FooterIconProps):JSX.Element {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)

    return <Link ref={hoverRef} className={`${className} mx-2`}  href={href} target='_blank'><Icon width={width} height={height} fill={isHover ? color:"#bdc8d5"} /></Link>
}