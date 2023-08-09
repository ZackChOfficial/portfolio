import Link from 'next/link'
import AnimatedContainer from '../AnimatedContainer'

export default function Contact():JSX.Element {
    return <div className='my-4'id='contact' >
        <AnimatedContainer>
        <h1 className='text-xl text-slate-100 w-full pt-4 pb-2'>Reach Out to me!</h1>
        <p className='text-slate-400 text-justify text-lg'>Got a project or just want to say hi? My inbox is open to all.</p>
        <Link className='text-xl text-sky-500 w-full pt-4 underline underline-offset-4' href="mailto:zack.chatouane@gmail.com" target='_blank'>zack.chatouane@gmail.com</Link>
        </AnimatedContainer>
    </div>
}