// src/app/page.tsx
"use client";

import React from "react";
import {
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Database,
  Cloud,
  ArrowUpRight,
  MapPin,
  Calendar,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import blogsData from "@/data/blogs.json";

const Page = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredProjects = [
    {
      title: "Autonomous Outbound Engine",
      subtitle: "Multi-Agent System with CrewAI & Playwright",
      repo: "autonomous-growth-core",
      link: "https://github.com/iamnikhilpal/autonomous-growth-core",
      tag: "Agentic AI",
      description:
        "Autonomous outbound pipeline automating search engine data harvesting, entity disambiguation, and structured lead delivery. Engineered with browser automation and anti-bot rate-limiting.",
      techStack: ["Python", "CrewAI", "Playwright", "AsyncIO", "LLMs"],
    },
    {
      title: "Enterprise Predictive Modeling Pipelines",
      subtitle: "Reproducible Data Engineering Framework",
      repo: "predictive-modeling-pipelines",
      link: "https://github.com/iamnikhilpal/predictive-modeling-pipelines",
      tag: "MLOps / Data",
      description:
        "Modular ML pipelines for high-throughput feature engineering, dataset preprocessing, validation splits, and reproducible model artifact management.",
      techStack: ["Python", "Scikit-Learn", "ETL", "Feature Store", "Pandas"],
    },
    {
      title: "Algorithmic Foundations & Core Systems",
      subtitle: "Reference Implementations & Data Structures",
      repo: "algorithmic-foundations",
      link: "https://github.com/iamnikhilpal",
      tag: "Systems",
      description:
        "Memory-conscious data structures, graph traversals, and dynamic programming implementations optimized for computational efficiency and clean abstraction boundaries.",
      techStack: ["C++", "Python", "Data Structures", "Algorithms"],
    },
  ];

  const experiences = [
    {
      company: "Virtusa Consulting Services",
      role: "Lead Software Engineer",
      duration: "Nov 2021 – Present",
      location: "Bengaluru, India",
      bullets: [
        "Architect and lead the core subscription billing and invoicing pipeline for Dell Technologies, ensuring strict financial correctness and zero data drop across high-volume transaction runs.",
        "Engineered an autonomous distributed scheduler service within the orchestration layer to dynamically manage job lifecycles, execution dependencies, and fault tolerance.",
        "Drove enterprise modernization initiatives, decoupling legacy monolithic workflows into independent, testable cloud microservices.",
        "Standardized CI/CD automated deployment pipelines and reduced batch processing windows across core billing schedules.",
      ],
    },
    {
      company: "OTSi - Object Technology Solutions",
      role: "Software Engineer",
      duration: "Jul 2018 – Sep 2021",
      location: "Hyderabad, India",
      bullets: [
        "Built and maintained resilient ETL ingestion pipelines for the National Data and Analytics Platform (NDAP) for NITI Aayog, standardizing heterogeneous public datasets.",
        "Designed data wrangling and validation engines processing massive multi-format records with automated schema anomaly detection.",
        "Implemented cloud bot infrastructure using AWS Cognito authentication and Azure bot processing workflows.",
        "Engineered invoice audit parsing engines to detect risk markers and duplicate transaction anomalies.",
      ],
    },
    {
      company: "SEDOTS Info Technologies",
      role: "Software Developer",
      duration: "Oct 2017 – Apr 2018",
      location: "Hyderabad, India",
      bullets: [
        "Built core web application modules for the Telangana State Seed Certification Agency (TSSOCA), managing payment and seed certification tracking.",
        "Optimized relational database queries and schema designs to improve application throughput and transaction handling.",
      ],
    },
  ];

  const capabilities = [
    {
      title: "AI Architectures & Multi-Agent Systems",
      icon: <Cpu className="w-4 h-4 text-blue-600" />,
      items: [
        "CrewAI & LangGraph",
        "Multi-Agent Orchestration",
        "Autonomous Browser Control",
        "Prompt Systems & Disambiguation",
        "Reinforcement Learning Basics",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-4 h-4 text-blue-600" />,
      items: [
        "Google Cloud Platform (GCP)",
        "Azure DevOps",
        "AWS Cognito & Cloud IaaS",
        "CI/CD Automation",
        "Containerized Systems",
      ],
    },
    {
      title: "Data Engineering & Pipelines",
      icon: <Database className="w-4 h-4 text-blue-600" />,
      items: [
        "ETL Pipeline Architecture",
        "Apache Airflow",
        "High-Volume Invoicing Systems",
        "Data Normalization & Cleaning",
        "Queue & Scheduler Engineering",
      ],
    },
    {
      title: "Core Software Engineering",
      icon: <Terminal className="w-4 h-4 text-blue-600" />,
      items: [
        "Python (AsyncIO, FastAPI)",
        "TypeScript / Next.js",
        "C++ Foundations",
        "Relational Schema Design",
        "Distributed Systems & Decoupling",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans">
      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-zinc-200/80 bg-white"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-medium text-zinc-700">
                  Lead Software Engineer
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
                Nihil Pal
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-8">
                Architecting autonomous multi-agent AI systems, scalable backend
                data pipelines, and mission-critical cloud infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-5 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors shadow-xs"
                >
                  Explore Systems
                </button>
                <a
                  href="https://github.com/iamnikhilpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-zinc-200 bg-white text-zinc-700 text-xs font-medium hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nihil-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-zinc-200 bg-white text-zinc-700 text-xs font-medium hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-zinc-200 p-1 bg-white shadow-xs">
                <Image
                  src="/profile-picture.png"
                  alt="Nihil Pal"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover rounded-xl grayscale-[20%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-b border-zinc-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 mb-2">
                Background
              </h2>
              <p className="text-xl font-bold tracking-tight text-zinc-950">
                Nearly a decade of engineering ownership.
              </p>
            </div>

            <div className="md:col-span-2 space-y-5 text-sm md:text-base text-zinc-600 leading-relaxed">
              <p>
                My background spans from hands-on software development to
                architectural leadership on enterprise platforms. I specialize in
                high-reliability backend pipelines, autonomous agent systems
                (CrewAI, LangGraph), and cloud modernization.
              </p>
              <p>
                Currently at Virtusa, I lead the core billing and invoicing
                pipeline for Dell Technologies, directing scheduling engines and
                distributed transaction workflows. In open source, I build
                multi-agent research pipelines that handle real-world browser
                automation, rate limiting, and structured data extraction.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-zinc-200">
                  <div className="text-2xl font-bold text-zinc-900">8+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono mt-0.5">
                    Years Experience
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-zinc-200">
                  <div className="text-2xl font-bold text-zinc-900">Lead</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono mt-0.5">
                    System Architecture
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-zinc-200 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold text-zinc-900">Enterprise</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono mt-0.5">
                    Grade Deliveries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Systems Section */}
      <section id="projects" className="py-20 border-b border-zinc-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 mb-2">
                Featured Work
              </h2>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                Systems & Architectures
              </h3>
            </div>
            <a
              href="https://github.com/iamnikhilpal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>View all repositories on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 rounded-xl border border-zinc-200 bg-[#FAFAFA] hover:bg-white hover:border-zinc-300 hover:shadow-xs transition-all duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-200/60 text-zinc-700 font-medium">
                      {project.tag}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 group-hover:text-zinc-900 transition-colors"
                      aria-label="View Project Source"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-base font-bold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/80">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-b border-zinc-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 mb-2">
              Career Trajectory
            </h2>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl border border-zinc-200 bg-white shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h4 className="text-lg font-bold text-zinc-950">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-blue-600">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-xs font-mono text-zinc-500 flex flex-col sm:items-end gap-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs sm:text-sm text-zinc-600 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technical Writing & Publications */}
      <section id="writing" className="py-20 border-b border-zinc-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 mb-2">
                Writing & Notes
              </h2>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                Architecture & Engineering Case Studies
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 mt-2 sm:mt-0">
              {blogsData.length} articles published
            </span>
          </div>

          <div className="divide-y divide-zinc-200/80 border-y border-zinc-200/80">
            {blogsData.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between group gap-2 transition-colors hover:bg-zinc-50/50 -mx-3 px-3 rounded-lg"
              >
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mt-1">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0 flex-shrink-0">
                  <span className="text-xs font-mono text-zinc-400">
                    {post.tag}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Skills Section */}
      <section id="skills" className="py-20 border-b border-zinc-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 mb-2">
              Technical Stack
            </h2>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
              Capabilities & Tools
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-zinc-200 bg-[#FAFAFA]"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-md bg-white border border-zinc-200">
                    {cat.icon}
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-2xl bg-zinc-900 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Let's discuss system architecture.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Available for technical discussions on multi-agent AI systems,
                distributed backend design, and engineering leadership.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:nihilpal@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-zinc-900 text-xs font-semibold hover:bg-zinc-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>nihilpal@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nihil-pal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700 border border-zinc-700 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;