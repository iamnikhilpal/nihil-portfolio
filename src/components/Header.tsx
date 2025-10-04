"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Nihil Pal
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        {['home', 'products', 'about', 'contact'].map((section) => (
                            <Link
                                key={section}
                                href={section === 'home' ? '/' : `/${section}`}
                                className="capitalize transition-colors duration-200 text-white/80 hover:text-white"
                            >
                                {section}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
