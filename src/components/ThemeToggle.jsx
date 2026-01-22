import { LuMoon, LuSun } from "react-icons/lu"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const storedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
            setIsDarkMode(true)
        }
    }

    // Prevent flash on initial render
    if (!mounted) return null

    return (
        <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={cn(
                "fixed top-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
                "bg-card/80 backdrop-blur-sm border-2 border-border/50",
                `${isDarkMode ? 'hover:border-yellow-500/50 focus:ring-yellow-500/50' : 'hover:border-primary/50 focus:ring-primary/50'}`,
                "hover:shadow-lg hover:shadow-primary/25",
                "focus:outline-none focus:ring-2",
                "max-sm:hidden group"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <LuSun className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <LuMoon className="h-5 w-5 text-violet-600 group-hover:violet-blue-500 transition-colors" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Animated background glow */}
            <motion.span
                className={cn(
                    "absolute inset-0 rounded-full -z-10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    isDarkMode ? "bg-yellow-500/20" : "bg-violet-600/20"
                )}
            />
        </motion.button>
    )
}