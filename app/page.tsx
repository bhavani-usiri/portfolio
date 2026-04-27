"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LinkedinIcon,
  Mail,
  ExternalLink,
  Code2,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const projects = [
    {
      title: "Enterprise Commerce Platform",
      desc: "Scalable e-commerce solution with payments, authentication, and analytics.",
    },
    {
      title: "AI Workflow Dashboard",
      desc: "Smart productivity platform with automation tools and real-time insights.",
    },
    {
      title: "Business Analytics Suite",
      desc: "Modern dashboard for KPIs, reporting, and performance intelligence.",
    },
  ];

  const skills = [
    { name: "Frontend", tech: "React, Next.js, Tailwind" },
    { name: "Backend", tech: "Node.js, Express, PostgreSQL" },
    { name: "Languages", tech: "TypeScript, JavaScript, Python" },
    { name: "Tools", tech: "Git, Docker, Vercel" },
  ];

  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_55%)]" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm md:text-base tracking-widest text-gray-400 mb-6"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8"
          >
            Durga Bhavani Meesala
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Full Stack Developer crafting scalable digital experiences with
            modern technologies, precision, and clean design.
          </motion.h2>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-7 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Technical Arsenal
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-blue-500/40 transition-all"
              >
                <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                <p className="text-sm text-gray-400">{skill.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-transparent">
                  <Code2 size={52} className="text-gray-300" />
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex gap-4">
                    <Globe
                      size={18}
                      className="cursor-pointer hover:text-blue-400 transition-colors"
                    />
                    <ExternalLink
                      size={18}
                      className="cursor-pointer hover:text-blue-400 transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-white/10 text-center"
      >
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s build something exceptional.
          </h3>

          <p className="text-gray-400 mb-10 text-lg">
            Currently available for freelance projects and full-time
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@durgabhavani.com"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>

            <a
              href="#"
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-white/10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Durga Bhavani Meesala. Built with Next.js &
        Tailwind CSS.
      </footer>
    </main>
  );
}