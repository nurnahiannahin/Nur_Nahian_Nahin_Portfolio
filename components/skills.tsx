import React from 'react';
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPandas,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
  SiShopify,
  SiWordpress,
  SiExpress,
  SiFastapi,
  SiDocker,
  SiN8N,
  SiSqlite,
  SiOpenai,
  SiShadcnui,
  SiClerk,
  SiSqlalchemy,
} from 'react-icons/si';
import { FiKey, FiShield, FiShare2 } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const primaryCategories: SkillCategory[] = [
  {
    title: 'AI Automation & Orchestration',
    skills: [
      { name: 'n8n', icon: SiN8N, color: 'text-orange-500' },
      { name: 'LLM & Agent Flows', icon: SiOpenai, color: 'text-emerald-600 dark:text-emerald-400' },
      { name: 'Webhooks & REST', icon: FiShare2, color: 'text-blue-600' },
      { name: 'OAuth2 Integrations', icon: FiShield, color: 'text-indigo-500' },
    ],
  },
  {
    title: 'Backend, Databases & Auth',
    skills: [
      { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700 dark:text-blue-400' },
      { name: 'SQLAlchemy', icon: SiSqlalchemy, color: 'text-red-600' },
      { name: 'NeonDB', icon: SiPostgresql, color: 'text-emerald-500' },
      { name: 'Docker', icon: SiDocker, color: 'text-sky-500' },
      { name: 'Clerk Auth', icon: SiClerk, color: 'text-purple-600' },
      { name: 'JWT Auth', icon: FiKey, color: 'text-amber-500' },
    ],
  },
  {
    title: 'Frontend & SaaS UI',
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-500' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
      { name: 'shadcn/ui', icon: SiShadcnui, color: 'text-gray-900 dark:text-white' },
    ],
  },
];

const supportingSkills: SkillItem[] = [
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-800 dark:text-gray-200' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500' },
  { name: 'SQLite', icon: SiSqlite, color: 'text-sky-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Pandas', icon: SiPandas, color: 'text-purple-600' },
  { name: 'Shopify', icon: SiShopify, color: 'text-green-700' },
  { name: 'WordPress', icon: SiWordpress, color: 'text-gray-700 dark:text-gray-300' },
];

export default function Skills() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Core Stack
        </span>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
          Technical Expertise
        </h2>
      </div>

      {/* Priority 1: Primary Production Stack */}
      <div className="grid lg:grid-cols-3 gap-12">
        {primaryCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-sm"
                >
                  <skill.icon
                    className={`w-5 h-5 ${skill.color} opacity-85 group-hover:opacity-100 transition-opacity shrink-0`}
                  />
                  <span className="text-[12px] font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Priority 2: Supporting & Additional Experience */}
      <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800/80">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
          Additional &amp; Supporting Experience
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {supportingSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-gray-100 dark:border-gray-800/70 bg-gray-50/30 dark:bg-gray-900/20 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              <skill.icon
                className={`w-4 h-4 ${skill.color} opacity-70 group-hover:opacity-100 transition-opacity shrink-0`}
              />
              <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}