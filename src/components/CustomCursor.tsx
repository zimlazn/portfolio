import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [isOverText, setIsOverText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('button, a, input, textarea, select, [data-cursor-hover]');
        setIsHovered(!!isInteractive);

        // Check if cursor is over selectable text / inputs
        const isTextInput = target.closest('input, textarea, [contenteditable="true"]');
        const isTextElement = target.closest('p, span, h1, h2, h3, h4, h5, h6, pre, code, blockquote');
        setIsOverText(Boolean(isTextInput || (isTextElement && !isInteractive)));
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      const hasActiveRange = selection && !selection.isCollapsed && (selection.toString().trim().length > 0);
      setIsSelecting(Boolean(hasActiveRange));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('selectionchange', handleSelectionChange);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;

    const smoothTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(smoothTrailing);
    };

    animationFrameId = requestAnimationFrame(smoothTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  // While user is selecting text, hide custom cursor so native browser selection is completely smooth and unhindered
  const shouldHide = isSelecting || (isOverText && isClicking);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block transition-opacity duration-200 ${
        shouldHide ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Outer trailing circle */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-800/60 dark:border-white/70 transition-all duration-150 ease-out mix-blend-difference ${
          isHovered
            ? 'w-14 h-14 bg-white/20 backdrop-blur-[1px] scale-125'
            : isClicking
            ? 'w-6 h-6 scale-75'
            : isOverText
            ? 'w-6 h-6 opacity-40'
            : 'w-10 h-10'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
      {/* Center dot */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 dark:bg-white transition-transform duration-75 mix-blend-difference ${
          isHovered ? 'w-2 h-2 scale-150' : isOverText ? 'w-1 h-3 rounded-none' : 'w-2 h-2'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
};

