import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ThumbsUp, Star, Sparkles, Layers, Code2, Palette, Globe, ArrowUpRight } from 'lucide-react';

interface ExpertiseItem {
  number: string;
  category: string;
  title: string;
  description: string;
  badge?: string;
}

export const ExpertiseSection: React.FC = () => {
  const [activeHover, setActiveHover] = useState<number | null>(1);
  const [likes, setLikes] = useState({ hearts: 24, thumbs: 18, stars: 39 });
  const [hasLiked, setHasLiked] = useState({ heart: false, thumb: false, star: false });

  const items: ExpertiseItem[] = [
    {
      number: '01',
      category: 'DEVELOPMENT',
      title: 'Creative Development',
      description: 'Building fast, responsive and scalable interfaces with modern frontend technologies.',
    },
    {
      number: '02',
      category: 'MOTION DESIGN',
      title: 'Motion & Interaction',
      description: 'Turning static interfaces into expressive experiences through meaningful motion and seamless transitions.',
    },
    {
      number: '03',
      category: 'UI / UX DESIGN',
      title: 'UI / UX Design',
      description: 'Creating clean visual systems with strong hierarchy, usability and a distinctive personality.',
    },
    {
      number: '04',
      category: 'WEB ARCHITECTURE',
      title: 'Modern Web Apps',
      description: 'Developing interactive applications with component based architecture and dynamic data.',
    },
  ];

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, hearts: prev.hearts + (hasLiked.heart ? -1 : 1) }));
    setHasLiked((prev) => ({ ...prev, heart: !prev.heart }));
  };

  const handleThumbClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, thumbs: prev.thumbs + (hasLiked.thumb ? -1 : 1) }));
    setHasLiked((prev) => ({ ...prev, thumb: !prev.thumb }));
  };

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, stars: prev.stars + (hasLiked.star ? -1 : 1) }));
    setHasLiked((prev) => ({ ...prev, star: !prev.star }));
  };

  return (
    <section id="expertise" className="relative py-28 px-6 sm:px-12 bg-[#0c0c0c] text-[#EDE8DF] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Description & Interactive Floating Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span>05</span>
              <span>—</span>
              <span className="uppercase tracking-widest font-bold">EXPERTISE</span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide text-white leading-[0.9]">
              MY EXPERTISE
            </h2>

            <p className="text-lg sm:text-xl font-light text-neutral-200 leading-snug">
              I design and build digital experiences where design, code and motion work as one.
            </p>

            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              From expressive interfaces to smooth interactions, I combine frontend engineering with visual design to build digital experiences that feel alive.
            </p>

            {/* Floating Interactive Draggable Tech Badges */}
            <div className="relative pt-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-3">
                TECH STACK & TOOLS (INTERACTIVE)
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'JavaScript', color: 'bg-amber-400 text-black' },
                  { name: 'React JS', color: 'bg-cyan-500 text-black' },
                  { name: 'Tailwind CSS', color: 'bg-sky-400 text-black' },
                  { name: 'TypeScript', color: 'bg-blue-600 text-white' },
                  { name: 'HTML5', color: 'bg-orange-500 text-white' },
                  { name: 'CSS3', color: 'bg-indigo-500 text-white' },
                ].map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, rotate: Math.random() * 8 - 4 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                    className={`px-3 py-1 rounded-md text-xs font-bold cursor-grab active:cursor-grabbing shadow-md select-none transition-shadow ${tech.color}`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Accordion / Expertise Cards */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item, index) => {
              const isHovered = activeHover === index;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveHover(index)}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${isHovered
                      ? 'bg-neutral-900/90 border-neutral-700 shadow-xl'
                      : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
                    }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-neutral-400 font-semibold">
                          {item.number} / {item.category}
                        </span>
                      </div>

                      <h3 className="font-bebas text-3xl sm:text-4xl tracking-wide text-white flex items-center gap-3">
                        {item.title}
                        <ArrowUpRight className={`w-5 h-5 text-neutral-400 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1 text-white' : ''}`} />
                      </h3>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Interactive elements per card */}
                    {index === 1 && (
                      /* Motion & Interaction Card has the interactive like/feedback widget (as in video 01:09) */
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 p-2 rounded-xl bg-purple-950/40 border border-purple-800/50 backdrop-blur-sm self-start mt-2 sm:mt-0"
                      >
                        <button
                          onClick={handleHeartClick}
                          className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-bold ${hasLiked.heart
                              ? 'bg-rose-500 text-white'
                              : 'bg-neutral-800/80 hover:bg-neutral-700 text-rose-400'
                            }`}
                        >
                          <Heart className="w-3.5 h-3.5 fill-current" />
                          <span>{likes.hearts}</span>
                        </button>

                        <button
                          onClick={handleThumbClick}
                          className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-bold ${hasLiked.thumb
                              ? 'bg-indigo-500 text-white'
                              : 'bg-neutral-800/80 hover:bg-neutral-700 text-indigo-400'
                            }`}
                        >
                          <ThumbsUp className="w-3.5 h-3.5 fill-current" />
                          <span>{likes.thumbs}</span>
                        </button>

                        <button
                          onClick={handleStarClick}
                          className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-bold ${hasLiked.star
                              ? 'bg-amber-400 text-black'
                              : 'bg-neutral-800/80 hover:bg-neutral-700 text-amber-300'
                            }`}
                        >
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{likes.stars}</span>
                        </button>
                      </div>
                    )}

                    {index === 0 && (
                      <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl bg-neutral-800/60 border border-neutral-700 text-neutral-300">
                        <Code2 className="w-6 h-6 text-emerald-400" />
                      </div>
                    )}

                    {index === 2 && (
                      <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl bg-neutral-800/60 border border-neutral-700 text-neutral-300">
                        <Palette className="w-6 h-6 text-sky-400" />
                      </div>
                    )}

                    {index === 3 && (
                      <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl bg-neutral-800/60 border border-neutral-700 text-neutral-300">
                        <Globe className="w-6 h-6 text-amber-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
