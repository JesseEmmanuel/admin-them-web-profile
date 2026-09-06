import React from 'react'

export default function Experience() {
    const experience = [
        {
            year: 'Sept 2025 — July 2026',
            role: 'Fullstack Developer (Front End Focus)',
            company: 'Tidewrk',
            description: 'Maintained and optimized client-facing web applications using Next.js and TypeScript across production environments. Built features with React Hook Form, Zod, React Query, and shadcn/ui.'
        },
        {
            year: 'Sept 2023 — Aug 2025',
            role: 'Software Engineer',
            company: 'Kodakollectiv',
            description: 'Built RESTful APIs with Nest.js, Laravel, Django, and Prisma. Deployed and optimized backend applications on AWS Elastic Beanstalk and RDS for scalable production systems.'
        },
        {
            year: 'June 2023 — Aug 2023',
            role: 'Wordpress Developer',
            company: 'Human Incubator Inc.',
            description: 'Maintained and enhanced client WordPress sites, resolving performance bottlenecks and implementing security improvements. Customized themes and plugins to meet business requirements.'
        },
        {
            year: '2021 — 2023',
            role: 'Tech Support & WordPress Developer',
            company: 'Govesmart Solutions, Inc.',
            description: 'Developed responsive WordPress websites with cross-browser compatibility, managed social media accounts, and helped increase brand visibility and web traffic.'
        },
        {
            year: '2022 — 2023',
            role: 'Freelance Web Developer',
            company: 'Self-Employed | Part-time',
            description: 'Designed responsive websites for small businesses using WordPress, React, and Laravel. Implemented custom API integrations that enhanced functionality and engagement.'
        },
        {
            year: 'Sept 2020 - March - 2021',
            role: 'Junior Systems Engineer',
            company: 'Apollo Technologies Inc.',
            description: 'Configured and maintained Linux servers with high-availability setups, supporting enterprise-level systems and critical infrastructure. Implemented MySQL database synchronization and replication protocols.'
        },
    ]
    return (
        <section id="experience" className="mt-20 scroll-mt-24">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                        / system history
                    </p>
                    <h2 className="mt-2 text-2xl font-medium tracking-tight">
                        Experience log
                    </h2>
                    <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                        A few chapters from a career spent navigating the space between design and engineering.
                    </p>
                </div>
                <div className="flex flex-col h-full max-h-125 overflow-y-auto">
                    {experience.map((item) =>
                        <div key={item.year} className="grid gap-3 border-t border-border py-5 sm:grid-cols-[130px_1fr]">
                            <p className="font-mono text-[11px] text-muted-foreground">{item.year}</p>
                            <div>
                                <h3 className="font-medium">{item.role}</h3>
                                <p className="mt-1 font-mono text-xs text-cyan-200/80">{item.company}</p>
                                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{item.description}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
    )
}
