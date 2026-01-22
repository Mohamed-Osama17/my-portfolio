// import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { LuLinkedin, LuGithub, LuInstagram, LuMail, LuMapPin, LuPhone, LuSend, LuLoader } from "react-icons/lu";
import { cn } from "@/lib/utils.js"
import { motion } from "framer-motion"
import React, { useState } from "react"
import CustomToast from "./ui/CustomToast";
import emailjs from '@emailjs/browser'


export const ContactSection = () => {
    const [toastOpen, setToastOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [toastConfig, setToastConfig] = useState({
        title: '',
        description: ''
    })


    const contactInfo = [
        {
            icon: LuMail,
            label: "Email",
            value: "moohamedosama3@gmail.com",
            href: "mailto:moohamedosama3@gmail.com"
        },
        {
            icon: LuPhone,
            label: "Phone",
            value: "+201124227714",
            href: "tel:+201124227714"
        },
        {
            icon: LuMapPin,
            label: "Location",
            value: "Giza, Egypt",
            href: null
        }
    ]

    const socialLinks = [
        { icon: LuLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: LuGithub, href: "https://github.com/yourusername", label: "GitHub" },
        { icon: LuInstagram, href: "https://instagram.com/in/yourusername", label: "Instagram" },
        { icon: LuMail, href: "mailto:moohamedosama3@gmail.com", label: "Email" },
    ]


    const emailJsServiceId = 'service_7ntogo3'      // Replace this
    const emailJsTemplateId = 'template_fx9uyml'    // Replace this
    const emailJsPublicKey = '9Kiwe1SK8uhhAxsjx'        // Replace this

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // console.log('Form submitted:', formData)
        // Add your form submission logic here
        try {
            const result = await emailjs.send(emailJsServiceId, emailJsTemplateId, {
                fromName: formData.name,
                fromEmail: formData.email,
                message: formData.message,
                toName: "Mohamed Osama",
                replyTo: formData.email,        // ✅ ADD THIS!
                sentDate: new Date().toLocaleString()  // ✅ ADD THIS TOO!
            },
                emailJsPublicKey,
            )
            //* ✅ Log the success response
            console.log('✅ SUCCESS! Email sent:', result)
            console.log('Status:', result.status)        // Usually 200
            console.log('Text:', result.text)            // "OK"
            //* Success Toast
            setToastConfig({
                title: 'Message Sent Successfully! 🎉',
                description: `Thanks ${formData.name}! I'll get back to you soon.`
            })
            setToastOpen(true);
            setFormData({ name: '', email: '', message: '', });

        } catch (error) {
            //! ❌ Log the error response
            console.error('❌ FAILED! Email not sent:', error)
            console.error('Error status:', error.status)
            console.error('Error text:', error.text)
            setToastConfig({
                title: 'Failed to Send',
                description: 'Please Try again'
            })
            setToastOpen(true);

        } finally {
            setIsSubmitting(false)
        }

        //* Fake Sending using setTimeOut

        // setIsSubmitting(true);
        // setTimeout(() => {
        //     setToastConfig({
        //         title: 'Message Sent Successfully! 🎉',
        //         description: `Thanks ${formData.name}! I'll get back to you soon at ${formData.email}`
        //     })

        //     setToastOpen(true) // Open the toast
        //     setFormData({      // Clear the Inputs after submitting
        //         name: '',
        //         email: '',
        //         message: ''
        //     });
        //     setIsSubmitting(false);
        // }, 1500);


    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="relative py-20 px-6 md:px-12 lg:px-16 overflow-hidden">

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
                        <span className="text-foreground">Let's </span>
                        <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column - Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">Contact Information</h3>

                        {/* Contact Info Items */}
                        <div className="flex flex-col gap-5">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="group flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <info.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="text-sm md:text-base text-muted-foreground">{info.value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col items-center gap-4 pt-4"
                        >
                            <h4 className="font-semibold text-foreground">Connect With Me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="flex items-center justify-center p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                                    >
                                        <social.icon className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="p-6 md:p-8 bg-card rounded-2xl border border-border shadow-sm">
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                {/* Name Input */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Write your Name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Write your Email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Hello, I'd like to talk about..."
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={cn(
                                        "cosmic-button w-full flex justify-center items-center gap-2 mt-2"
                                    )}
                                >
                                    {isSubmitting ? <LuLoader size={16} className="animate-spin" /> : 'Send Message'}
                                    <LuSend size={18} className={cn(isSubmitting ? 'hidden' : 'block')} />
                                </button>
                                <CustomToast
                                    title={toastConfig.title}
                                    description={toastConfig.description}
                                    open={toastOpen}
                                    onOpenChange={setToastOpen}
                                />
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}