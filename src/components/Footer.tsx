// src/components/Footer.tsx
import React from "react";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-zinc-200/80 bg-white">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
                <p>© {new Date().getFullYear()} Nihil Pal. All rights reserved.</p>
                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/iamnikhilpal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nihil-pal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:nihilpal@gmail.com"
                        className="hover:text-zinc-900 transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;