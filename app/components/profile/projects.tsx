import React from 'react'
import StatusDot from '../utilities/status-dot'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { link } from 'fs'

export default function Projects() {
    const projects = [
        {
            name: 'Visit Iloilo',
            type: 'Wordpress Website',
            status: 'Live',
            metric: '+42%',
            color: 'bg-cyan-300',
            image: 'profile-images/visitiloilo.png',
            tags: ['Wordpress', 'Elementor', 'PHP'],
            link: 'https://visitiloilocity.com/'
        },
        {
            name: 'Bullpup-pty Ltd.',
            type: 'Landing page',
            status: 'Live',
            metric: '18k',
            color: 'bg-amber-300',
            image: 'profile-images/bullpup.png',
            tags: ['React', 'tailwind'],
            link: 'https://bullpupptyltd.com/'
        },
        {
            name: 'Parkfinder (Unofficial)',
            type: 'Web App Solution',
            status: 'In-progress',
            metric: '94.8%',
            color: 'bg-fuchsia-300',
            image: 'profile-images/parkfinder.png',
            tags: ['Laravel', 'React', 'Inertia.js', 'Tailwind', 'Postgres'],
            link: 'https://github.com/JesseEmmanuel/park-finder'
        },
        {
            name: 'We Are Stellar',
            type: 'Web App Solution',
            status: 'Inactive',
            metric: '94.8%',
            color: 'bg-fuchsia-300',
            image: 'profile-images/wearestellar.png',
            tags: ['Laravel', 'React', 'Bootstrap', 'MysSQL'],
            link: 'https://github.com/JesseEmmanuel/stellarweb'
        },
    ]
    return (
        <section id="projects">
            <div className="flex items-end justify-between border-b border-border pb-4"><div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    / selected work
                </p>
                <h2 className="mt-2 text-2xl font-medium tracking-tight">
                    Some projects I worked with
                </h2>
            </div>
            </div>
            <div className="my-5 grid gap-4 md:grid-cols-3 h-full max-h-125 overflow-y-scroll">
                {projects.map((project) =>
                    <article key={project.name} className="flex flex-col justify-between group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-cyan-300/40">
                        <div>
                            <div className={`flex items-end rounded-xl p-4 `}>
                                <img className='rounded-lg' src={project.image} height={500} width={500} alt={`project ${project.name}`} />
                            </div>
                            <div className="flex items-start justify-between gap-4 pt-4">
                                <div className='flex justify-between w-full mb-2'>
                                    <div className='flex flex-col'>
                                        <h3 className="font-medium">
                                            {project.name}
                                        </h3>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {project.type}
                                        </p>
                                    </div>
                                    <span className={`ml-auto flex items-center gap-1 font-mono text-[10px] ${project.status === 'Live' ? 'text-emerald-300' : project.status === 'In-progress' ? 'text-amber-300' : 'text-red-300'}`}>
                                        <span className={`inline-block size-1.5 rounded-full ${project.status === 'Live' ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]' : project.status === 'In-progress' ? 'bg-amber-400 shadow-[0_0_12px_rgba(252,211,77,0.8)]' : 'bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]'}`} />
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between gap-2">
                                <div className='flex flex-wrap gap-2 w-full items-center max-w-60'>
                                    {project.tags.map((tag) =>
                                        <span key={tag} className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                                            {tag}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Button variant="outline" className="mt-4" onClick={() => window.open(project.link, '_blank')}>
                            View project
                        </Button>
                    </article>
                )}
            </div>
        </section>
    )
}
