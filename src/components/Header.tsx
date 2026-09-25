// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { label: "Overview", id: "home" },
        { label: "About", id: "about" },
        { label: "Systems", id: "projects" },
        { label: "Experience", id: "experience" },
        { label: "Writing", id: "writing" },
        { label: "Capabilities", id: "skills" },
        { label: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);

            const current = navItems.find((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 140 && rect.bottom >= 140;
                }
                return false;
            });
            if (current) setActiveSection(current.id);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-200 ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/80 shadow-xs"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <button
                    onClick={() => scrollToSection("home")}
                    className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                    Nihil Pal
                </button>

                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${activeSection === item.id
                                ? "bg-zinc-100 text-zinc-900 font-semibold"
                                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-3.5 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-xs"
                >
                    Resume
                </a>
            </div>
        </header>
    );
};

export default Header;