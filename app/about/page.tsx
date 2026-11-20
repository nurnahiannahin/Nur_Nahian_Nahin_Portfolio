'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiGithub, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const CORE_CAPABILITIES = [
  {
    title: 'AI Workflow Orchestration',
    stack: 'n8n, Webhooks, LLM JSON Routing, OAuth2 Integrations',
    detail: 'Deterministic multi-step pipelines that ingest data, generate structured AI drafts, and route actions safely without brittle no-code hacks.',
  },
  {
    title: 'Custom Backend & APIs',
    stack: 'Python, FastAPI, PostgreSQL, SQLite, REST APIs',
    detail: 'Typed data validation, persistent state machines, audit logs, and secure API layers built for real production reliability.',
  },
  {
    title: 'Human-in-the-Loop Interfaces',
    stack: 'React, Next.js, TypeScript, Tailwind CSS',
    detail: 'Fast, purpose-built operator dashboards that give teams real-time visibility, draft editing, and one-click sign-off before external actions fire.',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-24">
      {/* Page Header */}
      <div className="mb-16">
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-xs">
          About Me
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 tracking-tight">
          Full-Stack AI & Automation Engineer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-[720px] leading-relaxed">
          I build production-grade AI automation systems backed by custom APIs, relational databases, 
          and Human-in-the-Loop operator dashboards—turning fragile AI demos into verifiable business software.
        </p>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Left Side: Photo Container (5/12 width) */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-white group">
            <Image 
              src="/project-images/nur_nahian.jpeg" 
              alt="Nur Nahian Nahin - Full-Stack AI & Automation Engineer" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Description Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 dark:bg-black/90 backdrop-blur-md p-6 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wide uppercase">
                    Nur Nahian Nahin
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                    B.Sc. in CSE | Dhaka, Bangladesh (Remote Worldwide)
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Engineering Narrative (7/12 width) */}
        <div className="md:col-span-7 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-lg text-gray-900 dark:text-gray-100 font-medium">
            I&apos;m Nur Nahian Nahin, a Full-Stack AI & Automation Engineer with a B.Sc. in Computer 
            Science and Engineering from Daffodil International University.
          </p>
          <p>
            Most businesses today are stuck between two bad options: slow manual workflows or fragile 
            no-code AI bots that hallucinate, lose state, and risk brand reputation. I solve that by 
            pairing deterministic orchestration in <strong>n8n</strong> with custom <strong>Python/FastAPI</strong> backends, 
            <strong>PostgreSQL(SQLAlchemy)</strong> state tracking, and clean <strong>React, TypeScript</strong> approval dashboards.
          </p>
          <p>
            Before focusing on AI systems, I built end-to-end full-stack applications across React, 
            Next.js, Node.js, Python, and SQL—including a complete Doctor Management System for my 
            final-year university capstone. That software engineering foundation ensures every automation 
            I ship has proper validation, audit trails, and clean architecture under the hood.
          </p>
          <p>
            I also bring real operator experience. I founded and ran <strong>First Wear</strong>, a 
            direct-to-consumer clothing brand where I built the storefront, managed paid acquisition, 
            and handled customer operations, alongside growing two SEO-driven niche content platforms from zero. 
            Having owned real margins and response times myself, I engineer systems around measurable ROI—not hype.
          </p>
        </div>
      </div>

      {/* Technical Architecture Pillars */}
      <section className="mb-20">
        <div className="mb-8">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-xs">
            How I Build
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Production Stack & Engineering Focus
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl bg-gray-50 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3">
                  <FiCheckCircle size={18} />
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {item.detail}
                </p>
              </div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200/70 dark:border-gray-800">
                {item.stack}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 p-10 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Let&apos;s Build Something Reliable
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-[640px] leading-relaxed">
          Whether you are hiring a remote Full-Stack AI & Automation Engineer or need a custom 
          Human-in-the-Loop workflow built for your business, reach out directly and let&apos;s map out your system.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:nahiann90@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <FiMail size={18} /> Email Me
          </a>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-sm transition-transform hover:scale-[1.02] hover:bg-blue-700"
          >
            View Flagship System <FiArrowUpRight size={18} />
          </Link>
          <a 
            href="https://github.com/nurnahiannahin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiGithub size={18} /> GitHub Profile
          </a>
        </div>
      </section>

      {/* Resume / CV Section */}
      <section className="mb-8 mt-22 bg-white dark:bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-xs">
            Curriculum Vitae
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1.5">
            Download My Resume (PDF)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-[520px] leading-relaxed">
            Full breakdown of my AI automation architecture, FastAPI &amp; React engineering work, 
            B.Sc. in CSE, and founder experience.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="/Nur-Nahian-Nahin-CV.pdf"
            download="Nur-Nahian-Nahin-CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1d2bf1] hover:bg-[#1520cc] text-white font-semibold text-sm transition-colors"
          >
            Download CV
          </a>
          <a
            href="/Nur-Nahian-Nahin-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Preview PDF
          </a>
        </div>
      </section>
    </main>
  );
}