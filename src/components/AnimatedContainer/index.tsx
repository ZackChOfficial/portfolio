"use client"
import { useInView } from "framer-motion"
import { useRef } from "react";

export type AnimatedContainerProps = {
animationDelay?: string;
} & React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

export default function AnimatedContainer({className, animationDelay, children}: AnimatedContainerProps): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const style = {
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    transform: isInView ? "none" : "translateY(100px)",
    transitionDelay: animationDelay || ".3s"
  }

  return <div ref={ref} style={style} className={className}>
   {children}
  </div>  
}