"use client"
import Link from 'next/link'
import { ComponentType, useRef } from 'react'
import { useHover } from 'usehooks-ts'

type linkWithIconProps = {
    Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    href: string;
    width?: number;
    heigth?: number;
}

export default function LinkWithIcon({Icon, color, href, width= 32, heigth=32, children}: React.PropsWithChildren<linkWithIconProps>): JSX.Element {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)

    return <div ref={hoverRef} className={`flex ease-in-out duration-300 transition items-center font-normal`} style={{
        color: isHover ? color : "#94A3B8" 
    }}>
        <Icon width={width} height={heigth} fill={color} className='mr-2'/>
        <Link href={href}>{children}</Link>
    </div>
}