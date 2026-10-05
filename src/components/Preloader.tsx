import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'hello' | 'wipe' | 'done'>('counting');

  // Percentage counter matching the video cadence: 0% -> 13% -> 55% -> 91% -> 99% -> 100%
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // mimic realistic loading increments
      if (current < 15) {
        current += Math.floor(Math.random() * 4) + 1;
      } else if (current < 60) {
        current += Math.floor(Math.random() * 8) + 3;
      } else if (current < 90) {
        current += Math.floor(Math.random() * 6) + 2;
      } else if (current < 100) {
        current += 1;
      } else {
        current = 100;
      }

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        // After counting reaches 100%, switch to 'hello' animation
        setTimeout(() => {
          setPhase('hello');
        }, 500);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // When hello appears, show calligraphy for ~1.8s then start wipe
  useEffect(() => {
    if (phase === 'hello') {
      const timer = setTimeout(() => {
        setPhase('wipe');
      }, 2000);
      return () => clearTimeout(timer);
    } else if (phase === 'wipe') {
      const timer = setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  const handleSkip = () => {
    setPhase('done');
    onComplete();
  };

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#0a0a0a] text-[#EDE8DF] select-none">
      {/* Counting Phase */}
      {phase === 'counting' && (
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          {/* Large percentage display */}
          <div className="font-playfair text-7xl sm:text-9xl md:text-[13rem] font-normal tracking-tight text-[#E2D9CC] transition-all">
            {progress}%
          </div>

          {/* Curved tube / pencil rotating shape as seen in video */}
          <div className="relative mt-4 sm:mt-8 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
            <svg
              className="w-full h-full animate-spin-slow origin-center"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFD1BE" />
                  <stop offset="50%" stopColor="#BFAF9B" />
                  <stop offset="100%" stopColor="#8A7A66" />
                </linearGradient>
                <filter id="tubeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.6"/>
                </filter>
              </defs>
              {/* Crescent curved body with soft 3D shading */}
              <path
                d="M 60 20 C 85 20 102 38 102 62 C 102 85 84 100 62 100 C 42 100 32 88 32 75"
                stroke="url(#tubeGrad)"
                strokeWidth="18"
                strokeLinecap="round"
                filter="url(#tubeShadow)"
              />
              {/* Metallic cap / band */}
              <circle cx="32" cy="75" r="9" fill="#EDE8DF" stroke="#8A7A66" strokeWidth="2" />
              {/* Tip / eraser highlight */}
              <circle cx="32" cy="75" r="4.5" fill="#E8B4A2" />
            </svg>
          </div>

          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      )}

      {/* Hello Phase - Apple macOS signature cursive animation */}
      {phase === 'hello' && (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#050505]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            <svg
              className="w-80 sm:w-[26rem] md:w-[34rem] lg:w-[40rem] h-auto overflow-visible drop-shadow-[0_4px_24px_rgba(237,232,223,0.18)]"
              viewBox="0 0 520 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="appleHelloGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F7F4EE" />
                  <stop offset="50%" stopColor="#EFECE5" />
                  <stop offset="100%" stopColor="#DFD8CB" />
                </linearGradient>
              </defs>

              {/* Apple macOS iconic single-stroke cursive 'hello' */}
              <motion.path
                d="M 68 154 C 78 154 94 136 112 96 C 124 66 134 40 142 40 C 148 40 150 50 142 74 C 132 106 122 142 122 160 C 122 140 128 116 140 102 C 150 90 164 90 172 102 C 178 112 178 130 175 148 C 173 158 178 162 186 162 C 196 162 210 142 222 118 C 228 106 236 100 242 104 C 248 110 246 122 234 136 C 220 152 206 160 218 162 C 228 162 242 150 254 132 C 264 116 280 68 290 40 C 296 38 300 44 294 68 C 284 104 274 142 274 160 C 274 163 284 160 296 142 C 308 122 326 68 336 40 C 342 38 346 44 340 68 C 330 104 320 142 320 160 C 320 163 330 160 344 140 C 358 120 372 98 390 98 C 408 98 418 114 418 132 C 418 152 404 164 386 164 C 368 164 358 150 358 132 C 358 114 372 98 394 98 C 408 98 418 106 428 108 C 446 110 468 106 486 102"
                stroke="url(#appleHelloGrad)"
                strokeWidth="9.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.85, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Stepped block wipe transition uncovering the screen */}
      {phase === 'wipe' && (
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none z-50">
          {Array.from({ length: 24 }).map((_, idx) => {
            const row = Math.floor(idx / 6);
            const col = idx % 6;
            const distFromCenter = Math.abs(row - 1.5) + Math.abs(col - 2.5);
            return (
              <motion.div
                key={idx}
                className="w-full h-full bg-[#EDE8DF]"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: distFromCenter * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
