import { useAppStore } from '@/app/store/useAppStore'
import BrandMark from './brand-mark'
import { ArrowUpRight, BarChart3, BriefcaseBusiness, GitBranch, Globe2, Layers3, MessageSquareText, PanelLeftClose, PanelLeftOpen, X } from 'lucide-react'
import StatusDot from './status-dot'
import { useEffect, useRef } from 'react'

const navItems = [
    { label: 'Overview', icon: BarChart3, href: '#overview' },
    { label: 'Projects', icon: Layers3, href: '#projects' },
    { label: 'Experience', icon: BriefcaseBusiness, href: '#experience' },
    { label: 'Contact', icon: MessageSquareText, href: '#contact' },
]

export default function Sidenav() {
    const { sidebarOpen, mobileNavOpen, activeSection, setMobileNavOpen, navigateToSection, toggleSidebar } = useAppStore()
    const spotlightX = useRef(0);

    return (
        <>
            <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-card/95 px-4 py-5 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'} ${sidebarOpen ? '' : 'lg:w-20'}`}>
                <div className="flex items-center justify-between px-2">
                    <a href="#overview" className={`flex items-center gap-3 ${sidebarOpen ? '' : 'lg:justify-center lg:w-full'}`} onClick={() => setMobileNavOpen(false)}>
                        <BrandMark />
                        <span className={`font-mono text-sm font-semibold tracking-tight text-foreground ${sidebarOpen ? '' : 'lg:hidden'}`}>JESSE DEV<span className="text-cyan-300"></span></span>
                    </a>
                    <button aria-label="Close navigation" className="text-muted-foreground lg:hidden" onClick={() => setMobileNavOpen(false)}><X className="size-5" /></button>
                </div>

                <div className={`mt-12 ${sidebarOpen ? '' : 'lg:mt-16'}`}>
                    <p className={`px-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60 ${sidebarOpen ? '' : 'lg:hidden'}`}>Workspace</p>
                    <nav className="mt-3 flex flex-col gap-1">
                        {navItems.map(({ label, icon: Icon, href }) => {
                            const isActive = activeSection === href.slice(1)

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={(event) => {
                                        event.preventDefault()
                                        navigateToSection(href.slice(1))
                                    }}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive ? 'bg-cyan-300/10 text-cyan-200' : 'text-muted-foreground hover:bg-muted hover:text-foreground'} ${sidebarOpen ? '' : 'lg:justify-center'}`}
                                >
                                    <Icon className="size-4 shrink-0" />
                                    <span className={sidebarOpen ? '' : 'lg:hidden'}>{label}</span>
                                    {isActive && <span className={`ml-auto size-1.5 rounded-full bg-cyan-300 ${sidebarOpen ? '' : 'lg:hidden'}`} />}
                                </a>
                            )
                        })}
                    </nav>
                </div>

                <div className={`mt-auto rounded-xl border border-border bg-muted/40 p-3 ${sidebarOpen ? '' : 'lg:hidden'}`}>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                        <StatusDot />
                        Available for select work
                    </div>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        Currently looking for any role I may fit or project collaborations.
                    </p>
                    <a href="#contact" onClick={() => navigateToSection('contact')} className="mt-3 flex items-center gap-1 text-xs font-medium text-foreground hover:text-cyan-200">Start a conversation <ArrowUpRight className="size-3" /></a>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-muted-foreground">
                    <button aria-label="Toggle sidebar" className="hidden rounded-md p-2 hover:bg-muted hover:text-foreground lg:block" onClick={toggleSidebar}>{sidebarOpen ? <PanelLeftClose className="size-4" /> : <PanelLeftOpen className="size-4" />}
                    </button>
                    <div className={`flex gap-1 ${sidebarOpen ? '' : 'lg:w-full lg:justify-center'}`}>
                        <a aria-label="GitHub" href="https://github.com/JesseEmmanuel" className="rounded-md p-2 hover:bg-muted hover:text-foreground">
                            <GitBranch className="size-4" />
                        </a>
                        <a aria-label="Website" href="#contact" className="rounded-md p-2 hover:bg-muted hover:text-foreground"><Globe2 className="size-4" />
                        </a>
                    </div>
                    <span className={`font-mono text-[10px] ${sidebarOpen ? '' : 'lg:hidden'}`}>v2.4.0</span>
                </div>
            </aside>
            {mobileNavOpen &&
                <button aria-label="Close menu overlay" className="fixed inset-0 z-30 bg-background/70 lg:hidden" onClick={() => setMobileNavOpen(false)} />
            }
        </>
    )
}
