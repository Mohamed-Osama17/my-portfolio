import { LuArrowDown, LuArrowRight, LuDownload, LuGithub, LuLinkedin, LuMail } from "react-icons/lu"
import { motion } from "framer-motion"

export const HeroSection = () => {
    const socialLinks = [
        { icon: LuGithub, href: "https://github.com/Mohamed-Osama17", label: "GitHub" },
        { icon: LuLinkedin, href: "https://www.linkedin.com/in/mohamed-osama-dev/", label: "LinkedIn" },
        { icon: LuMail, href: "mailto:moohamedosama3@gmail.com", label: "Email" },
    ]

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 md:px-12 lg:px-16">
            {/* Main Container */}
            <div className="w-full max-w-7xl mx-auto">
                {/* Grid Layout: 2 Columns Centered */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Main Content (Centered on mobile, left-aligned on desktop) */}
                    <div className="flex flex-col items-center lg:items-start gap-6">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Available for Freelance Work
                            </span>
                        </motion.div>

                        {/* Heading Section */}
                        <div className="flex flex-col gap-3">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-center lg:text-left"
                            >
                                <span className="text-foreground">Hi, I'm </span>
                                <span className="text-primary">Mohamed Osama</span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-2xl md:text-3xl font-semibold text-foreground/70 text-center lg:text-left"
                            >
                                Front-End Developer
                            </motion.h2>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left max-w-xl"
                        >
                            Junior Frontend Developer | React • Next.js • TypeScript • Tailwind CSS | Building responsive, high-performance web apps
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <a
                                href="#projects"
                                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                            >
                                View My Work
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <LuArrowRight size={18} />
                                </motion.span>
                            </a>

                            <a
                                href="/Mohamed-Osama-Frontend-Developer-Resume.pdf"
                                download
                                className="group flex items-center justify-center gap-2 rounded-full outline-button"
                            >
                                <LuDownload size={18} className="group-hover:animate-bounce" />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto"
                        >
                            <span className="text-sm text-muted-foreground text-center sm:text-left">Connect with me:</span>
                            <div className="flex gap-3 justify-center sm:justify-start">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="flex items-center justify-center p-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                                    >
                                        <social.icon size={18} className="text-foreground/70 group-hover:text-primary transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute bottom-0 right-1/2 translate-1/2"
                        >
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
                                <div className="bg-primary/10 p-1 rounded-full border-2 border-primary">
                                    <LuArrowDown size={20} className="text-primary" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column - Profile Visual (Centered) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Profile Image Container */}
                            <div className="relative w-80 h-80 rounded-full bg-linear-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/profile-picture.png"
                                    alt="Mohamed Osama"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Floating decoration - Top Right */}
                            <motion.div
                                animate={{
                                    y: [-10, 10, -10],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 right-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                            />

                            {/* Floating decoration - Bottom Left */}
                            <motion.div
                                animate={{
                                    y: [10, -10, 10],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 left-0 w-14 h-14 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}