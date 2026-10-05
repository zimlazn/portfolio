import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToNext: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToNext,
  onContactClick,
}) => {
  const centerpieceRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [distortion, setDistortion] = useState(0);
  const [freq, setFreq] = useState(0.012);
  const animFrameRef = useRef<number | null>(null);
  const targetDistortionRef = useRef(0);
  const currentDistortionRef = useRef(0);

  // Synchronized distortion state for both FRONT END and DEVELOPER
  useEffect(() => {
    targetDistortionRef.current = isHovered ? 28 : 0;
  }, [isHovered]);

  useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.05;
      currentDistortionRef.current += (targetDistortionRef.current - currentDistortionRef.current) * 0.12;

      if (currentDistortionRef.current > 0.05) {
        setDistortion(currentDistortionRef.current);
        setFreq(0.012 + Math.sin(t) * 0.005);
      } else {
        setDistortion(0);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!centerpieceRef.current) return;
    const rect = centerpieceRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    targetDistortionRef.current = 24 + Math.sin(relX * Math.PI) * 16 + Math.cos(relY * Math.PI) * 10;
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between px-6 sm:px-12 pb-10 bg-[#EDE8DF] text-neutral-900 overflow-hidden">
      {/* Background subtle grain / grid feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* SVG liquid distortion filter definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="liquid-warp-hero" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={`${freq} ${freq * 1.5}`}
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={distortion}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Main Massive Centerpiece: FRONT END + DEVELOPER animated together */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col items-center justify-center my-auto py-10"
      >
        <div
          ref={centerpieceRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            targetDistortionRef.current = 0;
          }}
          onMouseMove={handleMouseMove}
          className="w-full max-w-7xl mx-auto flex flex-col items-center text-center cursor-pointer group"
          data-cursor-hover="true"
        >
          {/* FRONT END */}
          <div
            style={{
              filter: distortion > 0.5 ? 'url(#liquid-warp-hero)' : 'none',
              transition: 'filter 0.08s ease',
            }}
            className="w-full flex justify-center font-bebas text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15.5rem] leading-[0.82] tracking-tighter text-neutral-950 group-hover:text-black transition-colors"
          >
            FRONT END
          </div>

          {/* Sub labels row: VISUALS - CODE - EXPERIENCE */}
          <div className="w-full max-w-4xl flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-[0.25em] text-neutral-800 uppercase px-4 my-2 sm:my-3 select-none">
            <span>VISUALS</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span>CODE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            </div>
            <span>EXPERIENCE</span>
          </div>

          {/* DEVELOPER - Animated simultaneously with FRONT END */}
          <h1
            style={{
              filter: distortion > 0.5 ? 'url(#liquid-warp-hero)' : 'none',
              transition: 'filter 0.08s ease',
            }}
            className="font-bebas text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15.5rem] leading-[0.82] tracking-tighter text-neutral-950 group-hover:text-black transition-colors"
          >
            DEVELOPER
          </h1>
        </div>
      </motion.div>

      {/* Bottom Bar: ©2024 waqas | Scroll to Explore | Circular Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-300/60 z-10"
      >
        {/* Left: Copyright & Signature */}
        <div className="text-xs font-medium tracking-wider text-neutral-600 flex items-center gap-2">
          <span>©2026</span>
          <span className="font-caveat text-xl text-neutral-900 font-bold">Mizan</span>
        </div>

        {/* Center: Scroll to Explore Indicator */}
        <button
          onClick={onScrollToNext}
          className="flex flex-col items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-neutral-700 hover:text-neutral-950 transition-colors uppercase cursor-pointer group"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 rounded-full border border-neutral-600 flex items-start justify-center p-1 group-hover:border-neutral-900 transition-colors">
            <div className="w-1 h-2 rounded-full bg-neutral-900 animate-bounce" />
          </div>
        </button>

        {/* Right: Rotating Circular Stamp Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="relative w-24 h-24 flex items-center justify-center cursor-pointer group"
            aria-label="Let's work together"
          >
            {/* Spinning Text on SVG Path */}
            <svg
              className="w-full h-full animate-spin-slow origin-center"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="7.5" fontWeight="600" letterSpacing="2.2" fill="#262626">
                <textPath href="#circlePath" startOffset="0%">
                  • WORK TOGETHER • LET&apos;S WORK TOGETHER
                </textPath>
              </text>
            </svg>

            {/* Center Arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-[#EDE8DF] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </button>

          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-600 hidden sm:block select-none">
            BASED IN INDONESIA
          </div>
        </div>
      </motion.div>
    </section>
  );
};

