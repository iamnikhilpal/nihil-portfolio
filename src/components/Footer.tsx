import React from 'react';
import { Mail, Download } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Contact Us
                        </h3>
                        <div className="flex items-center justify-center md:justify-start space-x-2 text-white/80 hover:text-white transition-colors duration-200">
                            <Mail className="w-5 h-5" />
                            <a href="mailto:nihilpal@gmail.com">nihilpal@gmail.com</a>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            <Download className="w-5 h-5" />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-white/60">
                    <p>© {new Date().getFullYear()} Nihil Pal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
