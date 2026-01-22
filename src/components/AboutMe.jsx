import { LuBriefcase, LuCode, LuUser } from "react-icons/lu";


export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-16 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-12 text-3xl md:text-4xl font-extrabold text-center uppercase">
                    <span>About</span> <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                        <p className="leading-relaxed font-medium">
                            I’m a passionate frontend developer skilled in React 18, Next.js, TypeScript, and Tailwind CSS.
                            I’ve built projects like FreshCart and Circle-App, focusing on performance optimization, scalable state management,
                            and great user experiences.
                        </p>
                        <p className="leading-relaxed font-medium">
                            I'm excited about coming up with creative answers to challenging issues, 
                            and I'm always picking up new skills and 
                            technologies to keep up with the rapidly changing digital scene.
                        </p>
                        <div className="pt-4">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="group bg-card p-4 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <LuCode className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                        Web Development
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-card p-4 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <LuUser className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                        UI/UX Design
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Designing intuitive user interfaces and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-card p-4 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <LuBriefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                        Project Management
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Leading projects from conception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}