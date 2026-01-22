import { motion } from 'framer-motion'
import { LuArrowRight, LuExternalLink, LuGithub } from "react-icons/lu";

const projects = [
    {
        id: "1",
        title: "FreshCart – E-Commerce App",
        description: "Full-Featured e-commerce platform with user authentication and payment processing.",
        image: "/public/images/profile-picture.png",
        tags: ["React", "Tailwind-CSS", "Context-API"],
        demoUrl: "https://freshcart-mohameds-projects-2264d49f.vercel.app",
        githubUrl: "https://github.com/Mohamed-Osama17/freshcart",
    },
    {
        id: "2",
        title: "Circle-App – Social Media Platform",
        description: "Developed with Next.js, TypeScript, and Material UI. Added secure JWT authentication and skeleton loaders.",
        image: "/public/images/circle-app.png",
        tags: ["Next.js", "MUI", "Redux-ToolKit"],
        demoUrl: "https://circle-app-mohameds-projects-2264d49f.vercel.app",
        githubUrl: "https://github.com/Mohamed-Osama17/circle-app",
    },
    {
        id: "3",
        title: "Start Framework",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/public/images/start-framework.png",
        tags: ["React", "Tailwind-CSS", "Context-API"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold uppercase">
                        <span className="text-foreground">Featured </span>
                        <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                        Here are some of my recent projects. Each project was carefully crafted with attention to detail,
                        performance, and user experience.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-col grow p-6 gap-4">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title & Description */}
                                <div className="flex flex-col gap-2 grow">
                                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 pt-2 border-t border-border">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                                    >
                                        <LuExternalLink size={16} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center p-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group/icon"
                                    >
                                        <LuGithub size={18} className="text-foreground/70 group-hover/icon:text-primary transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/Mohamed-Osama17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                    >
                        Check My GitHub
                        <LuArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
            </div>
        </section>
    )
}