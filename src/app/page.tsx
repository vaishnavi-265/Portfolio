"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Bot,
  Brain,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MessageSquareCode,
  Network,
  ScanSearch,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useRef } from "react";
import { FloatingParticles } from "@/components/floating-particles";
import { SectionHeading } from "@/components/section-heading";
import { TypeCycle } from "@/components/type-cycle";

const skills = [
  { name: "Agentic AI", icon: Bot },
  { name: "LLMs", icon: Brain },
  { name: "RAG", icon: ScanSearch },
  { name: "AI Agents", icon: Network },
  { name: "Prompt Engineering", icon: MessageSquareCode },
  { name: "SAP AI", icon: ServerCog },
  { name: "ServiceNow", icon: Layers3 },
  { name: "Automation", icon: Workflow },
  { name: "Workflow Intelligence", icon: GitBranch },
  { name: "Python", icon: Code2 },
  { name: "LangChain", icon: Braces },
  { name: "OpenAI", icon: Sparkles },
  { name: "Vector DB", icon: Database },
  { name: "FastAPI", icon: Cpu },
  { name: "Cloud", icon: Cloud },
];

const experiences = [
  {
    title: "AI Engineer",
    company: "Trago Technologies",
    date: "Apr 2026 - Present",
    meta: "United States - Remote",
    points: [
      "Built AI-driven enterprise solutions",
      "Developed Agentic AI workflows",
      "Designed scalable LLM systems",
    ],
  },
  {
    title: "AI Engineer",
    company: "University of Memphis",
    date: "Aug 2025 - Dec 2025",
    meta: "Memphis, Tennessee - On-site",
    points: [
      "Research in Generative AI",
      "AI model development",
      "RAG experimentation",
    ],
  },
  {
    title: "AI Engineer",
    company: "ADVINTEK",
    date: "Jan 2021 - Dec 2023",
    meta: "Hyderabad, Telangana, India",
    points: [
      "Built production AI systems",
      "ML model deployment",
      "Enterprise automation",
    ],
  },
];

const education = [
  {
    title: "Master's Degree",
    school: "University of Memphis",
    date: "Jan 2024 - Dec 2025",
    focus: "Artificial Intelligence / Computer Science",
  },
  {
    title: "Bachelor of Technology (CSE)",
    school: "Malla Reddy Deemed to be University",
    date: "2017 - 2021",
    focus: "Computer Science & Engineering",
  },
];

const projects = [
  "Agentic AI Assistant",
  "Enterprise RAG Platform",
  "SAP AI Automation Agent",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[#D4A017]"
        style={{ scaleX: lineScale }}
      />
      <FloatingParticles />

      <section
        ref={heroRef}
        className="section-grid relative min-h-screen border-b border-white/10 px-4 pb-14 pt-6 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass flex items-center justify-between rounded-3xl px-4 py-3 text-xs text-white/80 sm:rounded-full sm:text-sm"
          >
            <span className="flex items-center gap-2 font-semibold tracking-[0.18em] text-[#D4A017] uppercase sm:tracking-[0.25em]">
              <Sparkles className="h-4 w-4" />
              Vaishnavi K
            </span>
            <nav className="hidden gap-6 md:flex">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </motion.header>

          <div className="grid min-h-[calc(100vh-6rem)] items-center gap-8 lg:min-h-[calc(100vh-7rem)] lg:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div style={{ y }} className="relative z-10 space-y-8">
              <div className="space-y-4 sm:space-y-5">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.85 }}
                  className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl xl:text-7xl"
                >
                  Vaishnavi K
                </motion.h1>
                <div className="h-7 text-lg text-[#f1d08a] sm:h-8 sm:text-xl md:text-2xl">
                  <TypeCycle
                    phrases={[
                      "AI Engineer",
                      "Agentic AI Developer",
                      "LLM Engineer",
                      "Generative AI Specialist",
                    ]}
                  />
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.85 }}
                  className="max-w-3xl text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
                >
                  Building Intelligent AI Systems That{" "}
                  <span className="text-gradient">Think, Learn &amp; Scale</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.85 }}
                className="max-w-3xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8"
              >
                AI Engineer specializing in Agentic AI, LLMs, Generative AI, RAG, SAP AI,
                ServiceNow, and AI Agents.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.85 }}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                {["View Resume", "Contact Me"].map((label, index) => (
                  <a
                    key={label}
                    href={index === 0 ? "#experience" : "#contact"}
                    className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 sm:w-auto ${
                      index === 0
                        ? "bg-[#D4A017] text-black shadow-[0_18px_40px_rgba(212,160,23,0.35)] hover:-translate-y-1"
                        : "glass hover:border-[#D4A017]/40 hover:text-[#f9dfa5]"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.85 }}
                className="grid max-w-2xl gap-4 sm:grid-cols-2"
              >
                {[
                  { value: "5+", label: "Years Building AI Systems" },
                  { value: "12+", label: "Enterprise AI Workflows" },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-3xl p-4 sm:p-5">
                    <div className="text-2xl font-semibold text-[#D4A017] sm:text-3xl">{item.value}</div>
                    <div className="mt-2 text-sm text-white/65">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="relative"
            >
              <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-6 md:rounded-[2.5rem] md:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
                <div className="relative space-y-6">
                  <div className="inline-flex rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-[#f6d992] sm:px-4 sm:text-sm sm:tracking-[0.2em]">
                    AI Focus
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 sm:rounded-[2rem] sm:p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/45 sm:text-sm sm:tracking-[0.18em]">Core Expertise</p>
                      <p className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                        Agentic AI, enterprise LLM systems, RAG workflows, and intelligent automation.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                        <p className="text-sm text-white/45">Domains</p>
                        <p className="mt-2 text-base text-[#f5d88f] sm:text-lg">SAP AI and ServiceNow</p>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                        <p className="text-sm text-white/45">Approach</p>
                        <p className="mt-2 text-base text-[#f5d88f] sm:text-lg">Scalable, recruiter-friendly, product-minded</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-18 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp}>
            <SectionHeading eyebrow="About Me" title="Elegant intelligence with enterprise depth." />
          </motion.div>
          <motion.div {...fadeUp} className="glass rounded-[1.75rem] p-6 sm:p-8 md:rounded-[2rem] md:p-10">
            <p className="text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
              I am an AI Engineer passionate about building next-generation intelligent systems
              using Agentic AI, Large Language Models, RAG pipelines, and enterprise AI solutions.
              My expertise includes developing scalable AI products, automation workflows, and
              enterprise integrations across SAP AI and ServiceNow ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="px-4 py-18 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp}>
            <SectionHeading eyebrow="Skills" title="" />
          </motion.div>
          <div className="mt-12">
            <motion.div
              {...fadeUp}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ rotateX: -6, rotateY: index % 2 === 0 ? 8 : -8, y: -8 }}
                  className="glass group rounded-[1.5rem] border border-white/12 p-4 transition-colors duration-300 hover:border-[#D4A017]/45 sm:rounded-[1.75rem] sm:p-5"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[#D4A017]/25 bg-[linear-gradient(145deg,rgba(212,160,23,0.22),rgba(255,255,255,0.05))] shadow-[0_14px_30px_rgba(0,0,0,0.24)] sm:h-14 sm:w-14 sm:rounded-[1.25rem]">
                      <div className="absolute inset-[6px] rounded-[0.95rem] border border-white/10 bg-black/35" />
                      <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#D4A017] shadow-[0_0_12px_rgba(212,160,23,0.8)]" />
                      <skill.icon className="relative h-5 w-5 text-[#f6d992] sm:h-6 sm:w-6" />
                    </div>
                    <div className="ml-4 h-px flex-1 bg-gradient-to-r from-[#D4A017]/35 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <h3 className="text-base font-medium text-white sm:text-lg">{skill.name}</h3>
                  <p className="mt-2 text-sm text-white/55">Applied in scalable AI product and workflow design.</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-18 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp}>
            <SectionHeading eyebrow="Experience" title="A focused path across research, enterprise delivery, and intelligent automation." />
          </motion.div>
          <div className="mt-12 relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#D4A017] to-transparent md:block" />
            <div className="space-y-6">
              {experiences.map((item, index) => (
                <motion.article
                  key={item.company}
                  {...fadeUp}
                  transition={{ delay: index * 0.08, duration: 0.7 }}
                  className="glass relative rounded-[1.75rem] p-5 sm:p-6 md:ml-14 md:rounded-[2rem] md:p-7"
                >
                  <div className="absolute left-[-2.65rem] top-8 hidden h-4 w-4 rounded-full border border-[#D4A017] bg-[#050505] shadow-[0_0_24px_rgba(212,160,23,0.55)] md:block" />
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {item.title} <span className="text-[#D4A017]">- {item.company}</span>
                      </h3>
                      <p className="mt-2 text-sm text-white/55">{item.meta}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#f3d487] sm:px-4 sm:text-sm">
                      {item.date}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-[#D4A017]/20 bg-[#D4A017]/8 px-4 py-2 text-sm text-white/75"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp}>
            <SectionHeading eyebrow="Education" title="Academic grounding shaped by computer science and AI specialization." />
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <motion.div key={item.school} {...fadeUp} className="glass rounded-[1.75rem] p-6 sm:p-8 md:rounded-[2rem]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A017]/12 text-[#D4A017] sm:h-14 sm:w-14 sm:rounded-2xl">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-base text-[#f4d78f] sm:text-lg">{item.school}</p>
                <p className="mt-2 text-sm text-white/55">{item.date}</p>
                <p className="mt-5 text-white/72">{item.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-18 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp}>
            <SectionHeading eyebrow="Projects" title="Flagship concepts designed to feel product-ready, strategic, and modern." />
          </motion.div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project}
                whileHover={{ y: -10, rotateX: -4, rotateY: index % 2 === 0 ? 5 : -5 }}
                className="glass rounded-[1.75rem] p-5 sm:rounded-[2rem] sm:p-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mb-5 flex h-40 items-end rounded-[1.25rem] bg-[radial-gradient(circle_at_top,#D4A01733,transparent_45%),linear-gradient(135deg,#111,#070707)] p-4 sm:h-48 sm:rounded-[1.5rem] sm:p-5">
                  <div className="rounded-full border border-[#D4A017]/35 bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#f5d88f]">
                    AI Product Concept
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{project}</h3>
                <p className="mt-3 text-white/65">
                  Premium concept card with cinematic motion, glowing edge highlights, and recruiter-friendly clarity.
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-18 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="space-y-6 text-center">
            <SectionHeading eyebrow="Contact" title="Open to building the next generation of intelligent systems." />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vaishnavi-k265/" },
                { icon: Mail, label: "Email", value: "vaishuvishnupriya8121@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="glass flex items-start gap-4 rounded-[1.5rem] p-5 text-left">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A017]" />
                  <div className="min-w-0">
                    <div className="text-sm text-white/50">{item.label}</div>
                    <div className="break-words text-sm text-white sm:text-base">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/52 md:px-10 lg:px-16" />
    </main>
  );
}
