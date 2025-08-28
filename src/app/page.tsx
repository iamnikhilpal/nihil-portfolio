"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin, Calendar, ExternalLink, Award, Code, Cloud, Database, Settings, User, Briefcase, GraduationCap, Phone } from "lucide-react";
import Image from 'next/image';
const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      company: "Virtusa Consulting Services Private Limited",
      role: "Lead Software Engineer",
      duration: "November 2021 – Present (3 years 10 months)",
      location: "Bengaluru, Karnataka, India",
      achievements: [
        "Leading the end-to-end invoicing process for Dell Technologies&apos; subscription billing product, ensuring accuracy and efficiency",
        "Designed and developed tools, such as a scheduler service within an orchestration tool, dynamically managing job execution and future schedules",
        "Initiated modernisation efforts, restructuring legacy services, enhancing code quality and scalability",
        "Introduced new technologies to integrate with legacy systems, enriching existing processes"
      ]
    },
    {
      company: "OTSi - Object Technology Solutions India Pvt. Ltd",
      role: "Software Engineer",
      duration: "July 2018 – September 2021 (3 years 3 months)",
      location: "Hyderabad Area, India",
      achievements: [
        "Primarily worked on ETL pipeline (building and maintaining) and report generation for the National Data and Analytics Platform (NDAP) for NITI Aayog",
        "Worked on data cleaning and data handling (raw data)",
        "Developed scripts/bots for data wrangling & formatting",
        "Involved in Bots building framework for Hitachi [cloud IaaS], including Authentication & User management [AWS-Cognito], Bot Training & Response designing [Azure], and CI/CD configurations",
        "Involved in Invoice Risk projects"
      ]
    },
    {
      company: "SEDOTS Info Technologies P Ltd",
      role: "PHP Developer",
      duration: "October 2017 – April 2018 (7 months)",
      location: "Hyderabad Area, India",
      achievements: [
        "Worked on web-based application software for Telangana State Seed Certification Agency (TSSOCA)",
        "Developed Payment module and Tagging module (labels for seed bags containing information)",
        "Managed User management systems",
        "Involved in Queries and code restructuring"
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Azure DevOps", "AWS-Cognito", "CI/CD", "Cloud IaaS", "Orchestration Tools"]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: ["ETL Pipelines", "Data Cleaning", "Data Handling", "Data Wrangling & Formatting", "Report Generation"]
    },
    {
      title: "Programming & Web Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["PHP", "Scripting/Bots Development", "Web Applications", "User Management", "SQL"]
    },
    {
      title: "Project Leadership",
      icon: <Settings className="w-6 h-6" />,
      skills: ["End-to-end Processes", "Modernisation Initiatives", "System Integration", "Code Quality Enhancement"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
        : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nihil Pal
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${activeSection === section
                    ? 'text-blue-400'
                    : 'text-white/80 hover:text-white'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Image
                  src="profile-picture.png"
                  alt="Nihil Pal"
                  className="w-30 h-30 rounded-full object-cover"
                  width={180}
                  height={180}
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nihil Pal
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 mb-6 font-medium">
              Lead Software Engineer | AI, MLOps & Data Specialist
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Driving innovation in software engineering, DevOps, and data solutions. I transform complex ideas into scalable, data-driven applications, with a dedicated focus on efficiency, modernization, and AI technology integration.
            </p>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            <span>Explore My Work</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Career Journey</h3>
                <p className="text-white/80 leading-relaxed">
                  My career has been a progressive journey from PHP Developer to Software Engineer,
                  and currently serving as a Lead Software Engineer. This evolution reflects my
                  commitment to continuous learning and adaptation to emerging technologies.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Core Expertise</h3>
                <p className="text-white/80 leading-relaxed">
                  I specialize in DevOps practices, ETL pipelines, data handling, and cloud technologies
                  including AWS-Cognito and Azure. My experience encompasses leading end-to-end software
                  processes and driving modernization efforts across diverse technology stacks.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Innovation Focus</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I&apos;m passionate about modernizing legacy systems, restructuring services for better
                  scalability, and introducing cutting-edge technologies that seamlessly integrate
                  with existing infrastructure.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">7+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">3</div>
                    <div className="text-sm text-white/80">Major Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-white/80 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-white/80">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0"></div>
                      <p className="text-white/80 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 max-w-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Azure DevOps Fundamentals</h3>
                  <p className="text-blue-400">for Beginners</p>
                </div>
              </div>
              <p className="text-white/80">Course Completion Certificate demonstrating proficiency in Azure DevOps fundamentals and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-white/80 text-lg">Let&apos;s connect and discuss opportunities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl text-center hover:shadow-blue-500/10 transition-all duration-300">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white/80">nihilpal@gmail.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl text-center hover:shadow-purple-500/10 transition-all duration-300">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ExternalLink className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/nihil-pal" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                View Profile
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl text-center hover:shadow-blue-500/10 transition-all duration-300">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-white/80">Hyderabad, Telangana & Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60">© 2025 Nihil Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;