# nihil-pal-portfolio

Personal engineering portfolio and technical writing platform for **Nihil Pal** (Lead Software Engineer & AI Systems Architect).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **React Markdown**. Designed with an editorial, high-contrast, minimalist aesthetic inspired by modern engineering leadership portfolios.

---

## ⚡ Tech Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Static Site Generation / SSG)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (`@tailwindcss/postcss`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Content Engine:** Local JSON data store (`src/data/blogs.json`) with dynamic markdown parsing via `react-markdown`
- **Deployment:** Vercel / Cloudflare Pages / Static Export (`out/`)

---

## 📂 Project Structure

```text
nihil-pal-portfolio/
├── public/
│   ├── favicon.ico
│   ├── profile-picture.png       # Headshot asset
│   └── resume.pdf                # Downloadable resume
├── src/
│   ├── app/
│   │   ├── blogs/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Dynamic blog article renderer
│   │   ├── globals.css           # Tailwind base styles
│   │   ├── layout.tsx            # Global layout, metadata & font setup
│   │   └── page.tsx              # Main portfolio landing page
│   ├── components/
│   │   ├── Header.tsx            # Floating backdrop blur navigation
│   │   └── Footer.tsx            # Minimalist footer
│   └── data/
│       └── blogs.json            # Markdown-supported local article store
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or Node.js 20+
- npm, pnpm, or yarn

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/iamnikhilpal/nihil-pal-portfolio.git](https://github.com/iamnikhilpal/nihil-pal-portfolio.git)
cd nihil-pal-portfolio
npm install

```

### 2. Development

Run the local development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000?utm_source=gemini) with your browser to view the portfolio.

### 3. Production Build

To test production static site generation and linting:

```bash
npm run build
npm run start

```

---

## ✍️ Publishing a New Blog Post

All technical articles are managed in `src/data/blogs.json`. To publish a new post:

1. Open `src/data/blogs.json`.
2. Append a new post object to the array:

````json
{
  "slug": "your-article-slug",
  "title": "Your Article Title",
  "date": "Oct 2026",
  "readingTime": "6 min read",
  "tag": "Architecture",
  "excerpt": "A short 1-2 sentence summary of what this article covers.",
  "content": "### Section Header\n\nYour article content in standard **Markdown** format...\n\n```python\n# Code blocks are supported\nprint('Hello World')\n```"
}
````

3. Save the file. Next.js will automatically generate the static route at `/blogs/your-article-slug` on your next build.

---

## 🌐 Production Domain

- **Primary URL:** [https://nihilpal.in](https://nihilpal.in?utm_source=gemini)
- **GitHub:** [@iamnikhilpal](https://github.com/iamnikhilpal?utm_source=gemini)
- **LinkedIn:** [in/nihil-pal](https://www.linkedin.com/in/nihil-pal?utm_source=gemini)

---

## 📄 License

MIT © [Nihil Pal](https://nihilpal.in?utm_source=gemini)
