// src/app/not-found.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

// Must be "export default"
export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-12 h-12 mx-auto rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700">
                    <Terminal className="w-6 h-6" />
                </div>

                <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                        Error 404
                    </span>
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-950 mt-1">
                        Route Not Found
                    </h1>
                    <p className="text-xs font-mono text-zinc-500 mt-2 leading-relaxed">
                        The requested resource is missing or has been relocated within the architecture.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-xs"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Portfolio</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}