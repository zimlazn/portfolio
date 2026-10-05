import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import creativePortfolioImg from '../assets/images/project_creative_portfolio_1791167510461.jpg';
import urbanFitImg from '../assets/images/project_urban_fit_1791167529530.jpg';
import gazuClothingImg from '../assets/images/project_gazu_clothing_1791167541295.jpg';
import luxuryWatchImg from '../assets/images/project_luxury_timepiece_1791167553456.jpg';

interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  isGazu?: boolean;
  accentBg?: string;
  accentTextColor?: string;
}

interface WorkSectionProps {
  onOpenGazuDemo: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenGazuDemo }) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '01',
      tag: "GRAPHIC DESIGNER'S PORTFOLIO WEBSITE • 01",
      title: 'Creative Portfolio',
      description:
        'A modern visual identity and digital experience designed for a contemporary creative designer.',
      tech: ['HTML', 'Tailwind', 'Javascript'],
      image: creativePortfolioImg,
      accentBg: 'bg-[#18181b]',
    },
    {
      id: '02',
      tag: 'URBAN FIT • 02',
      title: 'E-commerce website',
      description:
        'A modern digital shopping experience designed for contemporary brands, bringing products, style, and seamless commerce together.',
      tech: ['HTML', 'CSS', 'JavaScript', 'APIs'],
      image: urbanFitImg,
      accentBg: 'bg-[#121214]',
    },
    {
      id: '03',
      tag: 'GAZU • 03',
      title: 'Creative Clothing Website',
      description:
        'A modern digital shopping experience designed for contemporary brands, bringing products, style, and seamless commerce together.',
      tech: ['HTML', 'Tailwind', 'JavaScript'],
      image: gazuClothingImg,
      isGazu: true,
      accentBg: 'bg-[#1c1c1f]',
    },
    {
      id: '04',
      tag: 'OG WATCHES • 04',
      title: 'Luxury Timepieces',
      description:
        'A premium digital showcase designed for OG Watches, highlighting its timeless craftsmanship, refined details, and modern approach to luxury timepieces.',
      tech: ['HTML', 'Tailwind', 'JavaScript'],
      image: luxuryWatchImg,
      accentBg: 'bg-[#0f0f10]',
    },
    {
      id: '05',
      tag: 'AUREL • 05',
      title: 'Premium Headphones',
      description:
        'A premium digital showcase designed for a modern headphone brand, blending immersive visuals, refined aesthetics, and a seamless experience that brings sound, technology and style together.',
      tech: ['HTML', 'Tailwind', 'JavaScript'],
      image: luxuryWatchImg,
      accentBg: 'bg-[#141416]',
    },
    {
      id: '06',
      tag: 'MINI LIBRARY • 06',
      title: 'Library Management System',
      description:
        'A modern Library Management System designed to simplify book management, user records, borrowing, and return through an intuitive and efficient digital experience.',
      tech: ['HTML', 'Tailwind', 'JavaScript'],
      accentBg: 'bg-[#18181b]',
    },
  ];

  const handleActionClick = (project: Project) => {
    if (project.isGazu) {
      onOpenGazuDemo();
    } else {
      setActiveProject(project.id);
    }
  };

  return (
    <section id="work" className="relative bg-[#080808] text-[#EDE8DF]">
      {/* 1. Scrolling Tech Ribbon Ticker at Top (as seen in video 01:15) */}
      <div className="py-4 border-y border-neutral-800 bg-[#0c0c0c] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-10 text-xs font-mono tracking-widest text-neutral-400 uppercase">
          {Array.from({ length: 4 }).map((_, i) => (
            <React.Fragment key={i}>
              <span>HTML</span>
              <span>•</span>
              <span>CSS</span>
              <span>•</span>
              <span>JavaScript</span>
              <span>•</span>
              <span className="text-white font-bold">React JS</span>
              <span>•</span>
              <span>Firebase</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span className='text-white font-bold'>Tailwind CSS</span>
              <span>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Giant WORK Typographic Callout with paint splatter/dripping styling (as seen in video 01:16 - 01:24) */}
      <div className="relative py-20 px-6 sm:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#EDE8DF_1px,transparent_1px)] [background-size:24px_24px]" />

        <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 mb-4 block">
          SCROLL TO EXPLORE MY
        </span>

        {/* WORK with liquid paint drip effect */}
        <div className="relative">
          <h2 className="font-bebas text-[28vw] sm:text-[24vw] md:text-[22vw] lg:text-[18rem] leading-[0.78] tracking-tighter text-[#DFD6C7]">
            WORK
          </h2>

          {/* Paint splatters / dots underneath letters matching the video (01:20) */}
          <div className="absolute -bottom-4 left-1/4 w-3 h-3 rounded-full bg-[#DFD6C7] animate-pulse" />
          <div className="absolute -bottom-8 left-1/3 w-2 h-2 rounded-full bg-[#DFD6C7]" />
          <div className="absolute -bottom-6 right-1/4 w-4 h-4 rounded-full bg-[#DFD6C7]" />
          <div className="absolute -bottom-10 right-1/3 w-2.5 h-2.5 rounded-full bg-[#DFD6C7]" />
          <div className="absolute -bottom-3 right-1/2 w-1.5 h-1.5 rounded-full bg-[#DFD6C7]" />
        </div>

        {/* Category Ribbon Ticker below WORK */}
        <div className="w-full mt-12 py-3 border-y border-neutral-800/80 bg-neutral-950/60 overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 text-[11px] font-bold tracking-[0.25em] uppercase text-neutral-400">
            {Array.from({ length: 4 }).map((_, i) => (
              <React.Fragment key={i}>
                <span>UI/UX</span>
                <span>•</span>
                <span>INTERACTIVE WEB</span>
                <span>•</span>
                <span className="text-white">CREATIVE DEVELOPMENT</span>
                <span>•</span>
                <span>MOTION DESIGN</span>
                <span>•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Section title pill indicator */}
        <div className="mt-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-bebas text-2xl tracking-widest text-[#EDE8DF]">
            MY WORK
          </span>
        </div>
      </div>

      {/* 3. Stacked Project Cards Showcase (matches 01:25 - 01:52 in video) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-28 space-y-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky top-24 rounded-3xl border border-neutral-800/90 ${project.accentBg} p-8 sm:p-12 md:p-14 shadow-2xl transition-all duration-300 hover:border-neutral-700 overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Info & Action */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block">
                  {project.tag}
                </span>

                <h3 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-lg">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono text-neutral-300 bg-neutral-800/80 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Circular Spinning View Demo Action Badge (Matches video 01:28, 01:35) */}
                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => handleActionClick(project)}
                    className="relative w-28 h-28 flex items-center justify-center cursor-pointer group"
                    aria-label={`View demo for ${project.title}`}
                  >
                    <svg
                      className="w-full h-full animate-spin-slow origin-center"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <path
                          id={`workBadge-${project.id}`}
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text fontSize="7" fontWeight="700" letterSpacing="2.5" fill="#FFFFFF">
                        <textPath href={`#workBadge-${project.id}`} startOffset="0%">
                          • LIVE DEMO • MASTERPIECE • VIEW DEMO •
                        </textPath>
                      </text>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-115 group-hover:rotate-45 shadow-lg">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </button>

                  <div className="text-xs font-mono text-neutral-400">
                    {project.isGazu ? (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Click to launch live app
                      </span>
                    ) : (
                      <span>Featured Showcase</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Media Preview */}
              <div className="lg:col-span-6 relative">
                <div
                  onClick={() => handleActionClick(project)}
                  className="relative group rounded-2xl overflow-hidden border border-neutral-700/80 bg-neutral-900 cursor-pointer shadow-xl"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    /* Library management / interactive fallback view */
                    <div className="w-full h-72 sm:h-96 bg-neutral-900 p-8 flex flex-col justify-between font-mono text-xs text-neutral-300">
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                        <span className="text-emerald-400 font-bold">MINI LIBRARY // DB_V2</span>
                        <span>STATUS: ACTIVE</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center my-auto">
                        <div className="p-3 bg-neutral-800/80 rounded-lg">
                          <span className="text-2xl font-bold text-white block">11</span>
                          <span className="text-[10px] text-neutral-400">BOOKS</span>
                        </div>
                        <div className="p-3 bg-neutral-800/80 rounded-lg">
                          <span className="text-2xl font-bold text-white block">0</span>
                          <span className="text-[10px] text-neutral-400">BORROWED</span>
                        </div>
                        <div className="p-3 bg-neutral-800/80 rounded-lg">
                          <span className="text-2xl font-bold text-white block">7</span>
                          <span className="text-[10px] text-neutral-400">MEMBERS</span>
                        </div>
                      </div>
                      <div className="w-full py-2.5 bg-emerald-500/20 text-emerald-300 text-center rounded-lg border border-emerald-500/30">
                        + Add New Book Records
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-5 py-2.5 bg-white text-black font-semibold text-xs rounded-full shadow-lg">
                      Explore Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
