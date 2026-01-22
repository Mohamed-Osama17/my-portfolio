import { useState } from "react"
import { cn } from '@/lib/utils.js'
import { motion, AnimatePresence } from 'framer-motion'

const skills = [
    //FrontEnd
    { name: 'HTML/CSS', level: 100, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind', level: 100, category: 'Frontend' },
    { name: 'Next.JS', level: 80, category: 'Frontend' },

    //Library
    { name: 'Redux', level: 90, category: 'Library' },
    { name: 'Zustand', level: 90, category: 'Library' },
    { name: 'TanStack Query', level: 90, category: 'Library' },
    { name: 'Formik/Yup', level: 90, category: 'Library' },
    { name: 'React Router', level: 90, category: 'Library' },
    { name: 'Material-UI', level: 100, category: 'Library' },
    { name: 'Shadcn/UI', level: 90, category: 'Library' },
    { name: 'lucide React', level: 100, category: 'Library' },
    { name: 'Framer Motion', level: 100, category: 'Library' },

    //Tools
    { name: 'Git/GitHub', level: 90, category: 'Tools' },
    { name: 'Figma', level: 85, category: 'Tools' },
    { name: 'VS Code', level: 100, category: 'Tools' },
    { name: 'Cursor', level: 100, category: 'Tools' },
    { name: 'Windsurf', level: 100, category: 'Tools' },
    { name: 'Claude', level: 100, category: 'Tools' },
    { name: 'Postman', level: 90, category: 'Tools' },
]

const categories = ['All', 'Frontend', 'Library', 'Tools'];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredSkills = skills.filter(
        (skill) => activeCategory === 'All' || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-3xl md:text-4xl font-extrabold text-center uppercase"
                >
                    <span>My</span> <span className="text-primary">Skills</span>
                </motion.h2>

                {/* Trendy Category Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-3 mb-12"
                >
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 capitalize overflow-hidden",
                                "border-2 hover:scale-105 active:scale-95",
                                activeCategory === category
                                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                                    : 'bg-card/50 text-foreground border-border hover:border-primary/50 hover:bg-primary/5'
                            )}
                        >
                            {/* Animated background for active button */}
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute inset-0 bg-primary -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
                    >
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group bg-card p-4 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex flex-col text-center space-y-2">
                                    <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </h3>
                                    <div className="w-full bg-foreground rounded-full h-1.5 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                                            className="bg-primary h-full rounded-full"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-muted-foreground">{skill.category}</span>
                                        <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Skill Count Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        {filteredSkills.length} {filteredSkills.length === 1 ? 'Skill' : 'Skills'} {activeCategory !== 'All' && `in ${activeCategory}`}
                    </span>
                </motion.div>
            </div>
        </section>  
    )
}