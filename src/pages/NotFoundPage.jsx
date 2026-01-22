import { motion } from "framer-motion"
import { LuHouse, LuArrowLeft, LuSearch, LuCircleAlert } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-24 md:px-12 lg:px-16 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col items-center text-center gap-8">
                    
                    {/* Animated 404 Number */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold text-primary/20 leading-none select-none">
                            404
                        </h1>
                        
                        {/* Floating Icon */}
                        <motion.div
                            animate={{ 
                                y: [-10, 10, -10],
                                rotate: [-5, 5, -5]
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="p-6 rounded-full bg-card border-2 border-primary/50 backdrop-blur-sm">
                                <LuCircleAlert size={60} className="text-primary" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-4 max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Oops! <span className="text-primary">Page Not Found</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            The page you're looking for doesn't exist or has been moved. 
                            Don't worry, even the best developers get lost sometimes !
                        </p>
                    </motion.div>

                    {/* Search Suggestions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-3 w-full max-w-md"
                    >
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
                            <LuSearch size={20} className="text-primary shrink-0" />
                            <div className="text-left">
                                <p className="text-sm font-semibold text-foreground">Looking for something ?</p>
                                <p className="text-xs text-muted-foreground">Try searching from the homepage</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        {/* Go Home Button */}
                        <button
                            onClick={handleGoHome}
                            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                        >
                            <LuHouse size={18} />
                            Go to Homepage
                        </button>

                        {/* Go Back Button */}
                        <button
                            onClick={handleGoBack}
                            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-card border-2 border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
                        >
                            <LuArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </button>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col gap-4 pt-8"
                    >
                        <p className="text-sm text-muted-foreground font-medium">Quick Links:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href="/#about"
                                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                            >
                                About Me
                            </a>
                            <a
                                href="/#projects"
                                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                            >
                                Projects
                            </a>
                            <a
                                href="/#skills"
                                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                            >
                                Skills
                            </a>
                            <a
                                href="/#contact"
                                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>

                    {/* Fun Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="pt-8"
                    >
                        <p className="text-xs text-muted-foreground">
                            Error Code: 404 | "I'm not lost, I'm just exploring alternative routes" 🧭
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
                
                {/* Animated Circles */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl"
                />
            </div>
        </section>
    )
}