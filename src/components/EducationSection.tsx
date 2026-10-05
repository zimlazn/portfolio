import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  tag: string;
  description: string;
  highlights: string[];
}

export const EducationSection: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      period: '2022 — 2024',
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab College',
      location: 'Pakistan',
      tag: 'FORMAL EDUCATION',
      description:
        'Focused on fundamental computer sciences, algorithms, analytical thinking, and computational mathematics.',
      highlights: ['Mathematics & Logic', 'Computer Architecture', 'Object-Oriented Programming basics'],
    },
    {
      period: '2023 — Present',
      degree: 'Creative Frontend Engineering & Interactive Design',
      institution: 'Independent Digital Craft & Mentorship',
      location: 'Online / Self-Directed',
      tag: 'SPECIALIZATION',
      description:
        'Intensive deep-dive into modern JavaScript architectures, WebGL interactions, GSAP motion choreography, and high-performance React applications.',
      highlights: [
        'Advanced React 19 & TypeScript',
        'Kinetic Typography & SVG Liquid Shaders',
        'Lenis Smooth Scroll & GSAP ScrollTrigger',
        'Modern Responsive UI/UX Systems',
      ],
    },
    {
      period: '2023 — 2024',
      degree: 'Full-Stack Web Development & Modern Tooling',
      institution: 'Professional Certifications & Workshops',
      location: 'Remote',
      tag: 'CERTIFICATIONS',
      description:
        'Completed rigorous curricula covering responsive web layouts, component architecture, state management, and modern backend integration.',
      highlights: ['Modern Web Architecture', 'REST & GraphQL APIs', 'Performance Optimization'],
    },
  ];

  return (
    <section id="education" className="relative py-28 px-6 sm:px-12 bg-[#090909] text-[#EDE8DF] border-t border-neutral-900 overflow-hidden">
      {/* Subtle background ambient grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#EDE8DF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 border-b border-neutral-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">04</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
              ACADEMIC & LEARNING PATH
            </span>
          </div>

          <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
              EDUCATION
            </h2>
            <div className="relative w-36 h-1 bg-neutral-800 rounded-full overflow-hidden hidden sm:block">
              <div className="absolute top-0 left-0 h-full w-12 bg-[#EDE8DF] rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>KNOWLEDGE & GROWTH</span>
            </div>

            <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide leading-tight">
              A FOUNDATION BUILT ON{' '}
              <span className="text-[#EDE8DF] underline decoration-neutral-700 underline-offset-8">
                CURIOSITY & DISCIPLINE.
              </span>
            </h3>

            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
              Combining formal academic computing principles with relentlessly curious self-directed mastery of modern design engineering.
            </p>

            {/* Quick Stats Pill */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/90 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>DEGREE LEVEL</span>
                <span className="text-white font-semibold">INTERMEDIATE (ICS)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>FOCUS AREA</span>
                <span className="text-emerald-400 font-semibold">INTERACTIVE WEB & DESIGN</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>PHILOSOPHY</span>
                <span className="text-white font-semibold">LIFELONG STUDENT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-8 space-y-6">
            {educationList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/60 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md text-[11px] font-mono tracking-wider font-semibold bg-neutral-900 border border-neutral-700 text-neutral-300">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      {item.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="pt-5 space-y-3">
                  <h4 className="font-bebas text-3xl sm:text-4xl tracking-wide text-white group-hover:text-emerald-300 transition-colors">
                    {item.degree}
                  </h4>

                  <div className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-neutral-500" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
