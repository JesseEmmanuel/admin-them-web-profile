import { useAppStore } from '@/app/store/useAppStore'
import { ChevronRight, Menu, Radio, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
    const { setMobileNavOpen, activeSection } = useAppStore()
    const [timeString, setTimeString] = useState<string>("00:00:00 ---")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const formatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZoneName: 'short'
        })

        const updateTime = () => {
            setTimeString(formatter.format(new Date()))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/85 px-5 backdrop-blur-xl sm:px-8">
            <div className="flex items-center gap-3">
                <button aria-label="Open navigation" className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden" onClick={() => setMobileNavOpen(true)}><Menu className="size-5" />
                </button>
                <div className="hidden items-center gap-2 font-mono text-[11px] text-muted-foreground sm:flex">
                    <span className="text-cyan-300">
                        ~/
                    </span> jesseemmanuel <ChevronRight className="size-3" />
                    {activeSection}
                </div>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
                <span className="hidden items-center gap-2 sm:flex">
                    <Radio className="size-3 text-emerald-400" /> SYSTEMS NOMINAL
                </span>
                <span className="size-1 rounded-full bg-border" />
                <span className="min-w-21.25">
                    {mounted ? timeString : "LOADING..."}
                </span>
            </div>
        </header>
    )
}
