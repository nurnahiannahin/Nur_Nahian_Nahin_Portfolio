import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function HeroContent() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-Screen / Full-Width Background Glow & Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[45vw] h-[45vw] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_75%,transparent_100%)]" />
      </div>

      {/* Centered Content Container (unchanged) */}
      <div className="w-full max-w-[1100px] mx-auto px-6 py-24 md:min-h-[75vh] flex flex-col justify-center items-start">
        
        {/* Status & Name */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for Work
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Nur Nahian Nahin • Dhaka, BD
          </span>
        </div>

        {/* Clean, Focused Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.12] max-w-[780px]">
          I build reliable AI automation systems with{" "}
          <span className="text-[#1d2bf1] dark:text-[#4d59ff]">
            n8n, FastAPI, and React.
          </span>
        </h1>

        {/* Short, Clear Subtitle */}
        <p className="mt-5 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-[560px] leading-relaxed">
          Full-Stack AI &amp; Automation Engineer building custom backends and Human-in-the-Loop dashboards that replace fragile manual workflows.
        </p>

        {/* Two Simple CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white bg-[#1d2bf1] hover:bg-[#1520cc] transition-colors"
          >
            View Flagship Project <FiArrowUpRight size={17} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}