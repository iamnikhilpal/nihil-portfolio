// src/app/blogs/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import blogsData from "@/data/blogs.json";
import type { Metadata } from "next";

// 1. CRITICAL for static export: Tells Next.js that ANY slug not returned
// by generateStaticParams should strictly 404 rather than attempting dynamic SSR.
export const dynamicParams = false;

// 2. Ensure only valid, non-empty string slugs are returned
export async function generateStaticParams() {
    if (!blogsData || !Array.isArray(blogsData)) return [];

    return blogsData
        .filter((post) => Boolean(post.slug && post.slug.trim()))
        .map((post) => ({
            slug: post.slug.trim(),
        }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = blogsData.find((p) => p.slug === slug);

    if (!post) return {};

    return {
        title: `${post.title} | Nihil Pal`,
        description: post.excerpt,
        alternates: {
            canonical: `https://nihilpal.in/blogs/${post.slug}/`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://nihilpal.in/blogs/${post.slug}/`,
            siteName: "Nihil Pal",
            type: "article",
            publishedTime: post.date,
            authors: ["Nihil Pal"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogsData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-28 pb-20">
            <div className="max-w-3xl mx-auto px-6">
                <Link
                    href="/blogs/"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to all articles</span>
                </Link>

                <div className="mb-10 pb-8 border-b border-zinc-200">
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-4">
                        <span className="px-2 py-0.5 rounded bg-zinc-200/60 text-zinc-700 font-medium">
                            {post.tag}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-base text-zinc-600 leading-relaxed font-mono text-xs">
                        {post.excerpt}
                    </p>
                </div>

                <div className="prose prose-zinc max-w-none space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
                    <ReactMarkdown
                        components={{
                            h3: ({ children }) => (
                                <h3 className="text-xl font-bold tracking-tight text-zinc-950 mt-8 mb-3">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-zinc-600 leading-relaxed mb-4">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc pl-5 space-y-1.5 mb-4 text-zinc-600">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal pl-5 space-y-1.5 mb-4 text-zinc-600">
                                    {children}
                                </ol>
                            ),
                            pre: ({ children }) => (
                                <pre className="p-4 rounded-xl bg-zinc-900 text-zinc-100 font-mono text-xs overflow-x-auto my-4 border border-zinc-800">
                                    {children}
                                </pre>
                            ),
                            code: ({ children }) => (
                                <code className="px-1.5 py-0.5 rounded bg-zinc-200/70 text-zinc-800 font-mono text-xs">
                                    {children}
                                </code>
                            ),
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}