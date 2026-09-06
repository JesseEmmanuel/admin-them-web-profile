import { useAppStore } from '@/app/store/useAppStore'
import { Activity, ArrowUpRight, Terminal } from 'lucide-react'
import StatusDot from '../utilities/status-dot'
import * as motion from "motion/react-client"
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaPhp,
    FaPython,
    FaAws,
    FaWordpress,
    FaElementor
} from 'react-icons/fa'
import { BsTypescript } from 'react-icons/bs'
import { RiNextjsFill } from 'react-icons/ri'
import {
    SiTailwindcss,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiDjango,
    SiNestjs
} from 'react-icons/si'
import { HyperText } from '@/components/ui/hyper-text'

export default function Overview() {
    const { navigateToSection } = useAppStore()
    const toolkit = [
        {
            name: 'React',
            icon: <FaReact />,
            color: '#61DAFB',
        },
        {
            name: 'TypeScript',
            icon: <BsTypescript />,
            color: '#3178C6',
        },
        {
            name: 'Next.js',
            icon: <RiNextjsFill />,
            color: '#FFFFFF', // White looks better on dark backgrounds
        },
        {
            name: 'Tailwind',
            icon: <SiTailwindcss />,
            color: '#06B6D4',
        },
        {
            name: 'Node.js',
            icon: <FaNodeJs />,
            color: '#339933',
        },
        {
            name: 'Postgres',
            icon: <SiPostgresql />,
            color: '#336791',
        },
        {
            name: 'MySQL',
            icon: <SiMysql />,
            color: '#4479A1',
        },
        {
            name: 'Prisma ORM',
            icon: <SiPrisma />,
            color: '#5A67D8',
        },
        {
            name: 'Laravel',
            icon: <FaLaravel />,
            color: '#FF2D20',
        },
        {
            name: 'PHP',
            icon: <FaPhp />,
            color: '#777BB4',
        },
        {
            name: 'Django',
            icon: <SiDjango />,
            color: '#44B78B',
        },
        {
            name: 'Python',
            icon: <FaPython />,
            color: '#3776AB',
        },
        {
            name: 'Nest.js',
            icon: <SiNestjs />,
            color: '#E0234E',
        },
        {
            name: 'AWS',
            icon: <FaAws />,
            color: '#FF9900',
        },
        {
            name: 'Wordpress',
            icon: <FaWordpress />,
            color: '#21759B',
        },
        {
            name: 'Elementor',
            icon: <FaElementor />,
            color: '#D53184',
        }
    ]
    return (
        <>
            <section
                id="overview"
                className="scroll-mt-24">
                <div className="flex flex-col justify-between gap-8 border-b border-border pb-8 md:flex-row md:items-end">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
                            / portfolio dashboard
                        </p>
                        <h1 className="mt-4 max-w-3xl text-balance font-mono text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl uppercase">
                            Building the web,
                            <HyperText className="text-muted-foreground">
                                One thoughtful solution at a time.
                            </HyperText>
                        </h1>
                        <p className="mt-5 max-w-xl text-pretty text-sm leading-6 text-muted-foreground">
                            Full-stack web developer crafting robust, user-centric web experiences from frontend finesse to backend reliability.</p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex shrink-0 items-center gap-3 font-mono text-xs text-muted-foreground">
                        <StatusDot /> OPEN TO WORK ANYTIME
                    </motion.div>
                </div>
            </section>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="flex items-center justify-between border-b border-border px-5 py-4">
                        <div className="flex items-center gap-2">
                            <Activity className="size-4 text-cyan-300" />
                            <h2 className="font-mono text-sm font-medium">
                                Current focus
                            </h2>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                            Live signal
                        </span>
                    </div>
                    <div className="grid gap-6 p-5 sm:grid-cols-[1fr_0.8fr] sm:p-8">
                        <div>
                            <p className="font-mono text-xs text-muted-foreground">
                                01 / 03
                            </p>
                            <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                                Making the invisible
                                <br />
                                <span className="text-cyan-200">
                                    feel inevitable.
                                </span>
                            </h3>
                            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                                I partner with ambitious teams to turn early ideas into clear, resilient products that people want to use.
                            </p>
                            <button type="button" onClick={() => navigateToSection('projects')} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 font-mono text-xs font-semibold text-slate-950 transition-transform hover:-translate-y-0.5">
                                View selected work
                                <ArrowUpRight className="size-4" />
                            </button>
                        </div>
                        <div className="relative min-h-48 overflow-hidden rounded-xl border border-cyan-300/15 bg-slate-950 p-4 font-mono text-[10px] text-cyan-200/70">
                            <div className="flex items-center gap-1.5 border-b border-cyan-200/10 pb-3">
                                <span className="size-2 rounded-full bg-rose-300/70" />
                                <span className="size-2 rounded-full bg-amber-300/70" />
                                <span className="size-2 rounded-full bg-emerald-300/70" />
                                <span className="ml-auto text-[9px] text-cyan-200/40">telemetry.ts
                                </span>
                            </div>
                            <div className="mt-4 leading-5"><span className="text-fuchsia-300">const</span> signal = {'{'}<br /><span className="pl-3 text-cyan-100">clarity:</span> <span className="text-amber-200">0.98</span>,<br /><span className="pl-3 text-cyan-100">momentum:</span> <span className="text-amber-200">0.87</span>,<br /><span className="pl-3 text-cyan-100">craft:</span> <span className="text-emerald-300">&quot;high&quot;</span><br />{'}'}<br /><br /><span className="text-fuchsia-300">export default</span> signal</div></div></div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                    <div className="flex items-center gap-2 font-mono text-sm">
                        <Terminal className="size-4 text-amber-300" />
                        Stack / toolkit</div>
                    <div className="mt-7 flex flex-wrap gap-2">
                        {toolkit.map((item) => (
                            <InteractiveHoverButton
                                key={item.name}
                                icon={item.icon}
                                className="rounded-md border border-border bg-muted/50 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground"
                                color={item.color}
                            >
                                {item.name}
                            </InteractiveHoverButton>
                        ))}
                    </div>
                    {/* <div className="mt-8 border-t border-border pt-5">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            Preferred environment
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                            Small teams, high trust,<br />meaningful problems.
                        </p>
                    </div> */}
                </div>
            </motion.div>
        </>
    )
}
