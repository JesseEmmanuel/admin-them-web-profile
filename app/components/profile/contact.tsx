import { useAppStore } from '@/app/store/useAppStore'
import { CoolMode } from '@/components/ui/cool-mode'
import { HyperText } from '@/components/ui/hyper-text'
import { Check, Copy, File, Send } from 'lucide-react'
import { motion } from 'motion/react'

export default function Contact() {
    const { copyEmail, copied } = useAppStore()
    return (
        <section id="contact" className="mt-20 scroll-mt-24 border-t border-border py-16">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                        / establish connection
                    </p>
                    <h2 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                        Let's build
                        something useful.<br />
                        <HyperText className="text-muted-foreground text-2xl sm:text-xl">
                            Have a project, an idea, or just want to say hello?
                        </HyperText>
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-3 sm:flex-row">
                    <CoolMode>
                        <button onClick={copyEmail} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 font-mono text-xs transition-colors hover:border-cyan-300/50 hover:bg-cyan-300/10">
                            {copied ? <Check className="size-4 text-emerald-300" /> : <Copy className="size-4" />} {copied ? 'Copied email' : 'Copy email'}
                        </button>
                    </CoolMode>
                    <a href="mailto:jesseemmanuel@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 font-mono text-xs font-semibold text-slate-950 hover:bg-cyan-200">
                        Send a note
                        <Send className="size-4" />
                    </a>
                    <a href="/Jesse_Emmanuel_Basco (2026).pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 font-mono text-xs font-semibold text-slate-950 hover:bg-cyan-200">
                        View / Download Resume
                        {/* <Send className="size-4" /> */}
                        <File className="size-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
