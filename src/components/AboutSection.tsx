import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Volume2, VolumeX, Sparkles, Check } from 'lucide-react';
import mizanPortrait from '../assets/images/mizan.jpeg';

export const AboutSection: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleSound = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(`const waqas = {
  role: "Creative Frontend Developer",
  focus: ["Interactive Web", "Motion Design", "WebGL/Canvas"],
  mindset: "Obsessed with details people don't notice"
};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 px-6 sm:px-12 bg-[#0e0e0e] text-[#EDE8DF] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header & Slider Line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 border-b border-neutral-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">02</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
              THE PERSON BEHIND THE WORK
            </span>
          </div>

          <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-white">
              ABOUT ME
            </h2>
            <div className="relative w-36 h-1 bg-neutral-800 rounded-full overflow-hidden hidden sm:block">
              <div className="absolute top-0 left-0 h-full w-12 bg-[#EDE8DF] rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Interactive Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src={mizanPortrait}
                alt="Waqas Bhatti Creative Developer"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[3/4] object-cover object-center filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />

              {/* Name Tag overlay */}
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <span className="font-bebas tracking-widest text-lg sm:text-xl text-white">
                  M. ARHAM AL MIZAN PANGGABEAN
                </span>
              </div>

              {/* Interactive buttons on portrait (matches 00:54 in video) */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                {/* Code Inspector Toggle */}
                <button
                  onClick={() => setShowCodeSnippet(!showCodeSnippet)}
                  className="w-11 h-11 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                  aria-label="Toggle code info"
                >
                  <Code className="w-5 h-5" />
                </button>

                {/* Sound / Ambient Toggle */}
                <button
                  onClick={toggleSound}
                  className="w-11 h-11 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                  aria-label="Toggle ambient effect"
                >
                  {isPlayingAudio ? (
                    <Volume2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <VolumeX className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Code Modal Overlay if triggered */}
              {showCodeSnippet && (
                <div className="absolute inset-0 bg-black/95 p-6 flex flex-col justify-between font-mono text-xs text-neutral-300 z-20">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span className="text-emerald-400 font-bold">// developer.config.ts</span>
                    <button
                      onClick={copySnippet}
                      className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Sparkles className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-emerald-300 text-[11px] sm:text-xs overflow-x-auto py-2 leading-relaxed">
                    {`const mizan = {
  role: "Creative Frontend Developer",
  location: "Bandung, Indonesia",
  focus: ["Web Design", "Motion Interaction"],
  philosophy: "Turning ideas into digital memories",
  stack: ["React", "TypeScript", "Tailwind", "GSAP"]
};`}
                  </pre>
                  <button
                    onClick={() => setShowCodeSnippet(false)}
                    className="w-full py-2 bg-neutral-900 border border-neutral-700 text-center rounded text-neutral-400 hover:text-white"
                  >
                    Close Terminal
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Bio & Metadata Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between h-full space-y-8"
          >
            {/* Tag */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                WHO AM I ?
              </span>
            </div>

            {/* Massive Heading */}
            <h3 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] text-white">
              I BUILD DIGITAL WORLDS WHERE{' '}
              <span className="text-neutral-400 underline decoration-neutral-600 underline-offset-8">
                DESIGN MEETS CODE.
              </span>
            </h3>

            {/* Two editorial paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                I&apos;m <strong className="text-white font-medium">Mizan</strong> — a creative frontend developer who enjoys turning ideas, interfaces and motion into experiences people remember.
              </p>
              <p className="text-neutral-400">
                I care about the details most people don&apos;t notice: the rhythm of typography, the timing of an interaction, the way a transition feels and the tiny moments that make a digital product feel alive.
              </p>
            </div>

            {/* Spec Matrix Grid (matches 00:50 - 00:58 in video) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-800/80">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                  BASED
                </span>
                <p className="text-sm font-semibold tracking-wide text-neutral-200">
                  INDONESIA
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                  FOCUS
                </span>
                <p className="text-sm font-semibold tracking-wide text-neutral-200">
                  WEB / MOTION
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                  BUILDING WEBSITES
                </span>
                <p className="text-sm font-semibold tracking-wide text-neutral-200">
                  1+ YEAR
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                  MINDSET
                </span>
                <p className="text-sm font-semibold tracking-wide text-neutral-200">
                  ALWAYS LEARNING
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                  PROJECTS DONE
                </span>
                <p className="text-sm font-semibold tracking-wide text-neutral-200">
                  10+
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                  EDUCATION
                </span>
                <p className="text-sm font-semibold tracking-wide text-neutral-200">
                  INTERMEDIATE
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
