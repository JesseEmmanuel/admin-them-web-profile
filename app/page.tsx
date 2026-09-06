'use client'

import { useAppStore } from './store/useAppStore'
import Overview from './components/profile/overview'
import Projects from './components/profile/projects'
import Experience from './components/profile/experience'
import Sidenav from './components/utilities/sidenav'
import StatusDot from './components/utilities/status-dot'
import Header from './components/utilities/header'
import Contact from './components/profile/contact'
import { GlyphMatrix } from '@/components/ui/glyph-matrix'



export default function Page() {
  const {
    sidebarOpen,
    activeSection,
  } = useAppStore()

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-300 selection:text-slate-950">
      <Sidenav />

      <div className={`min-h-screen transition-[padding] duration-300 ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
        <Header />
        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          {activeSection === 'overview' &&
            <Overview />
          }

          {activeSection === 'projects' &&
            <Projects />
          }

          {activeSection === 'experience' &&
            <Experience />
          }

          {activeSection === 'contact' &&
            <Contact />
          }
          <footer className="flex flex-col justify-between gap-3 border-t border-border pt-5 pb-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row">
            <span>© 2026 Jesse Emmanuel Basco / Built with intention</span>
            <span className="flex items-center gap-2"><StatusDot /> All systems operational</span>
          </footer>
        </main>
      </div>
    </div>
  )
}
