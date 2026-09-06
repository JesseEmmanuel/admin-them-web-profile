// store/useAppStore.ts
import { create } from 'zustand'

interface AppState {
    sidebarOpen: boolean
    mobileNavOpen: boolean
    activeSection: string
    copied: boolean
    toggleSidebar: () => void
    setMobileNavOpen: (isOpen: boolean) => void
    navigateToSection: (section: string) => void
    copyEmail: () => Promise<void>
}

export const useAppStore = create<AppState>((set) => ({
    sidebarOpen: true,
    mobileNavOpen: false,
    activeSection: 'overview',
    copied: false,

    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

    setMobileNavOpen: (isOpen) => set({ mobileNavOpen: isOpen }),

    navigateToSection: (section) => set({
        activeSection: section,
        mobileNavOpen: false
    }),

    copyEmail: async () => {
        await navigator.clipboard?.writeText('hello@alexmorgan.dev')
        set({ copied: true })
        setTimeout(() => set({ copied: false }), 1800)
    },
}))