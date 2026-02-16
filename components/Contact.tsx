"use client";

import React, { useState, FormEvent, useRef, useEffect } from "react"; // Import useRef and useEffect
import { Home, Phone, Mail } from "lucide-react";
import { ChunkyShadowButton } from "./ui/Buton";
import SocialMedia from "./SocialMedia";
import SectionHeader from "./SectionHeader";
import gsap from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

interface ContactInfoItem {
    icon: React.ReactNode;
    data: string[];
}

const contactInfoList: ContactInfoItem[] = [
    {
        icon: <Home className="w-8 h-8" />,
        data: ["28/1 Shishir Bila", "Rajshahi, Bangladesh"],
    },
    {
        icon: <Phone className="w-8 h-8" />,
        data: ["+880 1303 186546", "+880 1727 132696"],
    },
    {
        icon: <Mail className="w-8 h-8" />,
        data: ["manjirul2696@gmail.com", "mjshishirf@.com"],
    },
];

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");

    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animation for SectionHeader
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center+=100",
                        toggleActions: "play none none none",
                    }
                }
            );

            // Animation for left contact info card
            gsap.fromTo(leftCardRef.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        toggleActions: "play none none none",
                    }
                }
            );

            // Animation for right contact form card
            gsap.fromTo(rightCardRef.current,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.4,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        toggleActions: "play none none none",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setStatus("loading");
        setResponseMessage("");
        setValidated(false); // Reset validation state for next submission attempt

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setResponseMessage(data.message || "Message sent successfully!");
                // Clear form fields
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
                setResponseMessage(data.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setResponseMessage("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <section id="contact" ref={sectionRef}>
            <div className="relative py-24  px-4 sm:px-6 lg:px-8 bg-AquaDeep text-white overflow-hidden">

                <div ref={headerRef}>
                    <SectionHeader
                        title="Contact Me"
                        subtitle=""
                        align="center"
                        aqua={false}
                    />
                </div>

                {/* Background Glows */}
                <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-yellow-400/20 blur-[150px] rounded-full animate-pulse"></div>

                <div className="container relative z-10">
                    <div className="relative flex flex-col lg:flex-row items-stretch">

                        {/* LEFT CARD */}
                        <div ref={leftCardRef} className="
            lg:w-1/2
            bg-gradient-to-br from-white/10 via-white/5 to-white/10
            backdrop-blur-2xl border border-white/20 shadow-2xl
            rounded-[50px]
            p-12
            lg:-mb-12 lg:z-20
            transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]
          ">



                            <p className="mt-4 text-sm uppercase tracking-widest text-white/80 mb-12">
                                Have any question? Drop us a message.
                            </p>

                            <div className="space-y-8">
                                {contactInfoList.map((info, i) => (
                                    <div key={i} className="flex items-start gap-5 group">
                                        <div className="
                    bg-white/20 p-4 rounded-xl group-hover:bg-gradient-to-tr from-yellow-400 to-cyan-400 group-hover:text-black transition-all duration-300 shadow-md
                  ">
                                            {info.icon}
                                        </div>
                                        <div>
                                            {info.data.map((row, j) => (
                                                <p key={j} className="text-sm tracking-widest text-white/90">
                                                    {row}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div ref={rightCardRef} className="
            lg:w-1/2
            bg-gradient-to-br from-white/10 via-white/5 to-white/10
            backdrop-blur-2xl border border-white/20 shadow-2xl
            rounded-[50px]
            p-12
            lg:mt-12 lg:-ml-10
            relative z-10
            transform transition-all duration-500 hover:translate-y-3 hover:scale-[1.02]
          ">
                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit}
                                noValidate
                                data-validated={validated}
                            >
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Enter Name"
                                        className="w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 peer"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="name" className="absolute left-5 top-3 text-white/70 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-[-0.6rem] peer-focus:text-yellow-400 peer-focus:text-sm transition-all">
                                        Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="Enter Email"
                                        className="w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 peer"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="email" className="absolute left-5 top-3 text-white/70 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-[-0.6rem] peer-focus:text-yellow-400 peer-focus:text-sm transition-all">
                                        Email
                                    </label>
                                </div>

                                <div className="relative">
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Enter Message"
                                        className="w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 peer"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-5 top-3 text-white/70 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-[-0.6rem] peer-focus:text-yellow-400 peer-focus:text-sm transition-all">
                                        Message
                                    </label>
                                </div>

                                {responseMessage && (
                                    <div
                                        className={`p-3 rounded-xl text-center ${status === "success"
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-red-500/20 text-red-400"
                                            }`}
                                    >
                                        {responseMessage}
                                    </div>
                                )}
                                <div className="text-end">
                                    <ChunkyShadowButton type="submit" disabled={status === "loading"}>
                                        {status === "loading" ? "Sending..." : "Send Message"}
                                    </ChunkyShadowButton>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <SocialMedia />
            </div>
        </section>
    );
};

export default Contact;
