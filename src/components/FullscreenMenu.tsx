import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const menuItems = [
    { label: 'WORK', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'EDUCATION', id: 'education' },
    { label: 'EXPERTISE', id: 'expertise' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0a0a0a] text-white p-8 md:p-14 select-none"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between">
            <span className="font-caveat text-3xl text-[#EDE8DF] tracking-wide">
              Mizan
            </span>
            <button
              onClick={onClose}
              className="p-3 text-neutral-400 hover:text-white transition-colors cursor-pointer rounded-full border border-neutral-800 hover:border-neutral-600"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Large Menu Items - matching 00:24 in video */}
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 my-auto">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className="group flex items-center gap-4 text-4xl sm:text-6xl md:text-7xl font-bebas tracking-wider text-neutral-300 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#EDE8DF]" />
              </motion.button>
            ))}
          </div>

          {/* Bottom Info inside Menu */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 border-t border-neutral-900 pt-6 gap-3">
            <div>BASED IN INDONESIA</div>
            <div>© 2026 MIZAN PANGGABEAN — ALL RIGHTS RESERVED</div>
            <div>arhamalmizan@gmail.com</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
