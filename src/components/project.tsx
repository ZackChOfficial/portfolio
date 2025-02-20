"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import ShinyText from './shiny-text';
import { motion, useMotionValue, useSpring } from "framer-motion";

type ProjectProps = {
    title: string;
    date: string;
    description: string;
    technologies: string[];
    image: string;
    alt: string;
    rotateAmplitude?: number;
    scaleOnHover?: number;
}

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

function Project({ 
    title, 
    date, 
    description, 
    technologies, 
    image, 
    alt,
    rotateAmplitude = 9,
    scaleOnHover = 1.05 
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <div 
            className="relative [perspective:800px]"
            ref={ref}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="bg-slate-800/50 rounded-lg overflow-hidden [transform-style:preserve-3d]"
                style={{
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <div className="w-full h-36 md:h-48 relative">
                    <Image 
                        src={image}
                        alt={alt}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-lg text-white mb-3">{title}</h3>
                    <p className="text-sm mb-4">
                        {description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {technologies.map((tech, index) => (
                            <span 
                                className="px-2 py-1 text-xs bg-slate-700 rounded-full" 
                                key={index}
                            >
                                <ShinyText text={tech} disabled={false} speed={3}/>
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Project;