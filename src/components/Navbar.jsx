import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { LuMenu, LuX } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('#hero')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
            
            // Track active section
            const sections = navLinks.map(link => link.href)
            for (const section of sections) {
                const element = document.querySelector(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled 
                    ? "py-4 bg-background/90 backdrop-blur-lg shadow-lg border-b border-border/50" 
                    : 'py-6 bg-transparent'
            )}
        >
            <div className="container mx-auto px-6 md:px-8 lg:px-16 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='text-2xl font-extrabold flex items-center gap-2 group'
                    href='#hero'
                >
                    <span className='relative'>
                        <span className='text-foreground transition-colors duration-300 group-hover:text-primary'>
                            Mohamed
                        </span>
                        <span className='text-primary'> Portfolio</span>
                        <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-full px-2 py-2 border border-border/50'>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                                'hover:text-primary',
                                activeSection === link.href
                                    ? 'text-primary-foreground'
                                    : 'text-foreground/70'
                            )}
                        >
                            {activeSection === link.href && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-primary rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className='md:hidden p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground z-50'
                    aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={isMenuOpen ? 'close' : 'open'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden"
                                onClick={() => setIsMenuOpen(false)}
                            />

                            {/* Menu Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
                            >
                                <div className='flex flex-col space-y-2 w-64'>
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={cn(
                                                'px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300',
                                                'border border-border/50 backdrop-blur-sm',
                                                'hover:border-primary/50 hover:bg-primary/5',
                                                activeSection === link.href
                                                    ? 'bg-primary text-primary-foreground border-primary'
                                                    : 'bg-card/50 text-foreground/80'
                                            )}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Decorative Element */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute bottom-10 text-sm text-muted-foreground"
                                >
                                    Tap anywhere to close
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}