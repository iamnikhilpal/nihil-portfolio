// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import blogsData from "@/data/blogs.json";

// Required for Next.js static exports
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nihilpal.in";

    const blogUrls = blogsData.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}/`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blogs/`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        ...blogUrls,
    ];
}