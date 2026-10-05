import React from 'react';
import { Menu } from 'lucide-react';

interface NavigationProps {
  onOpenMenu: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
  theme?: 'light' | 'dark';
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenMenu,
  onNavigate,
  theme = 'light',
}) => {
  const navLinks = [
    { label: 'WORK', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'EDUCATION', id: 'education' },
    { label: 'EXPERTISE', id: 'expertise' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      className={`w-full py-4 px-6 sm:px-12 flex items-center justify-between transition-all duration-300 z-30 select-none backdrop-blur-md border-b ${isDark
          ? 'bg-black/40 border-white/10 text-white'
          : 'bg-[#EDE8DF]/50 border-neutral-900/10 text-neutral-900'
        }`}
    >
      {/* Brand Zone */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onNavigate('hero')}
          className="group flex items-center gap-2 text-left cursor-pointer"
        >
          <span className="font-caveat text-3xl sm:text-4xl tracking-wide font-bold">
            Mizan
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white inline-block mt-2 transition-transform group-hover:scale-150" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className="hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-[0.2em]"
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Action / Menu Trigger */}
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenMenu}
          className={`flex items-center justify-center p-2 rounded-full border transition-all cursor-pointer ${isDark
              ? 'border-neutral-700 hover:border-white text-white'
              : 'border-neutral-400/50 hover:border-neutral-900 text-neutral-900'
            }`}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between items-end">
            <span className={`h-[1.5px] w-5 transition-all ${isDark ? 'bg-white' : 'bg-neutral-900'}`} />
            <span className={`h-[1.5px] w-3.5 transition-all ${isDark ? 'bg-white' : 'bg-neutral-900'}`} />
            <span className={`h-[1.5px] w-5 transition-all ${isDark ? 'bg-white' : 'bg-neutral-900'}`} />
          </div>
        </button>
      </div>
    </header>
  );
};
