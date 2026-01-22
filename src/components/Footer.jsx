import { LuGithub, LuLinkedin, LuMail, LuHeart, LuArrowUp } from "react-icons/lu";
import { motion } from "framer-motion"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: LuGithub, href: "https://github.com/yourusername", label: "GitHub" },
        { icon: LuLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: LuMail, href: "mailto:your.email@example.com", label: "Email" }
    ]

    const quickLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-card/30 backdrop-blur-xs border-t border-border/50 mt-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-primary"
                        >
                            Mohamed Osama
                        </motion.h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Full-Stack Web Developer passionate about creating beautiful and functional web experiences.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
                        <div className="space-y-3 text-sm">
                            <a
                                href="mailto:your.email@example.com"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                                <LuMail size={16} />
                                <span>moohamedosama3@gmail.com</span>
                            </a>
                            <p className="text-muted-foreground">
                                Open to freelance opportunities and collaborations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} Mohamed Osama. Made with{" "}
                            <LuHeart className="inline-block w-4 h-4 text-red-500 fill-current" />{" "}
                            using React & Tailwind CSS
                        </p>

                        {/* Scroll to Top Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="p-2.5 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                            aria-label="Scroll to top"
                        >
                            <LuArrowUp size={18} />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
        </footer>
    )
}