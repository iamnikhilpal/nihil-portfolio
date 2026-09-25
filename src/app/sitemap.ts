// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import blogsData from "@/data/blogs.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nihilpal.in";

    const blogUrls = blogsData.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blogs/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...blogUrls,
    ];
}