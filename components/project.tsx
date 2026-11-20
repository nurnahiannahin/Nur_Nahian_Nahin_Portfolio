'use client';

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiSupabase,
  SiTypescript,
  SiN8N,
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
  featured?: boolean;
}

const flagshipProjects: Project[] = [
  {
    title: "NorthStar Ops — ApproveFlow AI",
    description:
      "Production Human-in-the-Loop (HITL) B2B lead triage and email approval system. Ingests inbound leads via n8n, generates tailored AI reply drafts, queues tickets in a FastAPI + PostgreSQL backend for real-time editing in a React dashboard, and dispatches approved replies via Gmail OAuth2.",
    tags: ["n8n", "FastAPI", "PostgreSQL", "React", "TypeScript"],
    githubLink: "https://github.com/nurnahiannahin/northstar-approveflow-ai",
    liveLink: "https://www.loom.com/share/YOUR_LOOM_VIDEO_ID",
    image: "/project-images/approveflow.png",
    featured: true,
  },
];

const fullStackProjects: Project[] = [
  {
    title: "Foodies Restaurant",
    description:
      "A robust, full-stack management solution designed to streamline restaurant operations. This platform centralizes order management, inventory tracking, and customer reservation scheduling.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    githubLink: "https://github.com/nurnahiannahin/foodies-restaurant",
    liveLink: "https://foodies-restaurant-irkr.vercel.app/",
    image: "/project-images/foodies.png",
  },
  {
    title: "MediClick",
    description:
      "An intuitive, clinical management system designed to streamline patient appointment scheduling. It enables seamless doctor discovery and booking while providing administrators with a centralized dashboard to manage operations efficiently.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    githubLink: "https://github.com/nurnahiannahin/Mediclick---Clinic-appoinment",
    liveLink: "https://mediclick-clinic-appoinment.vercel.app/",
    image: "/project-images/mediclick.png",
  },
  {
    title: "Fynnect - Doctor Management System",
    description:
      "A centralized platform to manage patient records, doctor schedules, and appointment bookings with real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/nurnahiannahin/Fynnect-appoinment-webapp",
    liveLink: "#",
    image: "/project-images/doctorM.jpg",
  },
];

const getTechIcon = (tag: string) => {
  const className = "text-xl";
  switch (tag) {
    case "n8n":
      return <SiN8N className={`${className} text-[#EA4B71]`} />;
    case "FastAPI":
      return <SiFastapi className={`${className} text-[#009688]`} />;
    case "PostgreSQL":
      return <SiPostgresql className={`${className} text-[#4169E1]`} />;
    case "React":
      return <SiReact className={`${className} text-[#61DAFB]`} />;
    case "TypeScript":
      return <SiTypescript className={`${className} text-[#3178C6]`} />;
    case "Next.js":
      return <SiNextdotjs className={`${className} text-black dark:text-white`} />;
    case "Tailwind CSS":
      return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
    case "Supabase":
      return <SiSupabase className={`${className} text-[#3ECF8E]`} />;
    case "Node.js":
      return <SiNodedotjs className={`${className} text-[#339933]`} />;
    case "Express":
      return <SiExpress className={`${className} text-gray-700 dark:text-gray-300`} />;
    case "MongoDB":
      return <SiMongodb className={`${className} text-[#47A248]`} />;
    default:
      return null;
  }
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex items-center gap-3 mb-6">
          {project.tags.map((tag) => (
            <div key={tag} title={tag}>
              {getTechIcon(tag)}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
          >
            <FiGithub size={18} /> Code
          </a>
          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors"
            >
              <FiExternalLink size={18} /> {project.featured ? "Watch Walkthrough" : "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ className = "py-16" }: { className?: string }) {
  return (
    <section
      id="projects"
      className={`w-full max-w-[1200px] mx-auto px-2 sm:px-6 ${className}`}
    >
      {/* Segment 1: Primary Focus (AI & Automation Systems) */}
      <div>
        <div className="mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Current &amp; Future Focus
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            Full-Stack AI &amp; Automation Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Segment 2: Supporting Foundation (Full-Stack Web Applications) */}
      <div className="mt-20 pt-14 border-t border-gray-100 dark:border-gray-800/80">
        <div className="mb-10">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Previous Engineering Work
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            Full-Stack Web Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {fullStackProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}