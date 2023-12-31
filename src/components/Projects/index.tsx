import Project from "../Project";
import Link from 'next/link'
import path from 'path';
import { promises as fs } from 'fs';
import { ProjectProps } from '../Project';
import AnimatedContainer from '../AnimatedContainer'

async function getData (): Promise<[ProjectProps]> {
    const jsonDirectory = path.join(process.cwd(), 'src/components/Projects');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const data = JSON.parse(fileContents)
    return data
}

export default async function Projects(): Promise<JSX.Element> {
    const projectsData = await getData()

    return <AnimatedContainer>
        <h3 className='text-slate-200 text-xl font-bold w-full mt-10' id="projects">Projects</h3>
        <div className='justify-center grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-x-2 w-full'>
            {projectsData.map((project, index) => 
            <Project {...project} key={project.url} animationDelay={`${0.1 + (index%2) * 0.5}s`} />
            )}
            
        </div>
        <Link href="https://github.com/ZackChOfficial" target="_blank" className="text-slate-200 w-full justify-center text-xl py-4 hover:underline underline-offset-4 flex">View more on Github</Link>
    </AnimatedContainer>
}