import React, { useRef, useState, useEffect } from 'react';

interface LiquidTextProps {
  text: string;
  className?: string;
}

export const LiquidText: React.FC<LiquidTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [distortion, setDistortion] = useState(0);
  const [freq, setFreq] = useState(0.012);
  const animFrameRef = useRef<number | null>(null);
  const targetDistortionRef = useRef(0);
  const currentDistortionRef = useRef(0);

  useEffect(() => {
    targetDistortionRef.current = isHovered ? 28 : 0;
  }, [isHovered]);

  useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.05;
      // Smooth interpolation towards target
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
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    
    // Dynamic intensity variation based on mouse position
    targetDistortionRef.current = 24 + Math.sin(relX * Math.PI) * 16 + Math.cos(relY * Math.PI) * 10;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        targetDistortionRef.current = 0;
      }}
      onMouseMove={handleMouseMove}
      className={`relative inline-block cursor-pointer select-none ${className}`}
      data-cursor-hover="true"
    >
      {/* SVG filter definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="liquid-warp" x="-20%" y="-20%" width="140%" height="140%">
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

      <span
        style={{
          filter: distortion > 0.5 ? 'url(#liquid-warp)' : 'none',
          transition: 'filter 0.1s ease',
        }}
        className="block"
      >
        {text}
      </span>
    </div>
  );
};
