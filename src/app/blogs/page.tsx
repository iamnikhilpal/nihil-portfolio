// src/app/blogs/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import blogsData from "@/data/blogs.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering Writing & Architecture Notes | Nihil Pal",
    description:
        "Technical articles and case studies on autonomous multi-agent AI systems, batch orchestration pipelines, and distributed cloud systems.",
    alternates: {
        canonical: "https://nihilpal.in/blogs/",
    },
};

export default function BlogsIndexPage() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-28 pb-20 font-sans">
            <div className="max-w-3xl mx-auto px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to overview</span>
                </Link>

                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
                        Articles & Architecture Notes
                    </h1>
                    <p className="text-sm text-zinc-600 font-mono">
                        Deep-dives into systems engineering, multi-agent frameworks, and cloud architecture.
                    </p>
                </div>

                <div className="divide-y divide-zinc-200 border-y border-zinc-200">
                    {blogsData.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blogs/${post.slug}`}
                            className="py-6 flex flex-col sm:flex-row sm:items-center justify-between group gap-4 transition-colors hover:bg-zinc-50/60 -mx-3 px-3 rounded-xl"
                        >
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-500">
                                    <span className="px-2 py-0.5 rounded bg-zinc-200/60 text-zinc-700 font-medium">
                                        {post.tag}
                                    </span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-xs text-zinc-600 leading-relaxed max-w-xl">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors flex-shrink-0">
                                <span>Read</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}