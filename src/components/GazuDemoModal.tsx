import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShoppingBag, Heart, Search, ChevronRight } from 'lucide-react';
import clothesRackImg from '../assets/images/project_gazu_clothing_1791167541295.jpg';
import urbanFitImg from '../assets/images/project_urban_fit_1791167529530.jpg';
import creativeImg from '../assets/images/project_creative_portfolio_1791167510461.jpg';

interface GazuDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GazuDemoModal: React.FC<GazuDemoModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<'MEN' | 'WOMEN' | 'KIDS' | 'BEAUTY'>('MEN');
  const [cartCount, setCartCount] = useState(0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl bg-[#F6F5F2] text-neutral-900 shadow-2xl overflow-hidden border border-neutral-300"
        >
          {/* Browser Mockup Chrome Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#EAE8E3] border-b border-neutral-300 select-none">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"
                aria-label="Close"
              />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white/80 border border-neutral-300 text-xs font-mono text-neutral-600 w-72 sm:w-96 justify-center truncate">
              <span className="text-neutral-400">https://</span>
              <span className="font-semibold text-neutral-800">project-gazu.netlify.app</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-neutral-300/80 transition-colors text-neutral-700"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Gazu Website Content (matches 01:40 - 01:45 in video) */}
          <div className="overflow-y-auto max-h-[calc(92vh-50px)]">
            {/* Top Announcement Bar */}
            <div className="bg-black text-[#EDE8DF] text-[11px] font-medium py-1.5 text-center tracking-wider">
              COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING ON ORDERS OVER $250
            </div>

            {/* Header */}
            <header className="px-6 sm:px-12 py-5 flex items-center justify-between border-b border-neutral-200">
              <nav className="flex items-center gap-6 text-xs font-semibold tracking-wider text-neutral-700">
                {(['MEN', 'WOMEN', 'KIDS', 'BEAUTY'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`transition-colors cursor-pointer ${
                      activeCategory === cat ? 'text-black font-bold border-b border-black' : 'hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>

              <div className="font-bebas text-3xl sm:text-4xl tracking-widest text-black">
                GAZU
              </div>

              <div className="flex items-center gap-4 text-neutral-800">
                <Search className="w-4 h-4 cursor-pointer hover:text-black" />
                <Heart className="w-4 h-4 cursor-pointer hover:text-black" />
                <button
                  onClick={() => setCartCount(cartCount + 1)}
                  className="flex items-center gap-1.5 text-xs font-bold bg-neutral-900 text-white px-3 py-1.5 rounded-full hover:bg-neutral-800 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{cartCount}</span>
                </button>
              </div>
            </header>

            {/* Hero Section */}
            <section className="relative px-6 sm:px-12 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F6F5F2]">
              <div className="md:col-span-5 space-y-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                  + NEW COLLECTION 2024
                </span>
                <h2 className="font-bebas text-6xl sm:text-7xl leading-[0.9] text-neutral-950">
                  FASHION THAT MOVES WITH YOU.
                </h2>
                <p className="text-sm text-neutral-600 font-light max-w-sm">
                  Minimalist silhouette and premium sustainable fabrics crafted for modern life.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="px-6 py-3 bg-neutral-950 text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    SHOP NOW
                  </button>
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="px-6 py-3 border border-neutral-900 text-neutral-900 text-xs font-bold tracking-widest uppercase rounded hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    EXPLORE NEW IN
                  </button>
                </div>
              </div>

              <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
                <img
                  src={clothesRackImg}
                  alt="GAZU Fashion Collection"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <span className="font-bebas text-4xl text-white tracking-widest">
                    GAZU ESSENTIALS
                  </span>
                </div>
              </div>
            </section>

            {/* 3-Column Collection Grid */}
            <section className="px-6 sm:px-12 py-10 border-t border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* MEN */}
                <div className="relative group rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 cursor-pointer">
                  <img
                    src={urbanFitImg}
                    alt="Men Collection"
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-5 text-white">
                    <span className="font-bebas text-2xl tracking-wider">MEN</span>
                    <span className="text-xs uppercase tracking-widest flex items-center gap-1 group-hover:underline">
                      Shop <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* WOMEN */}
                <div className="relative group rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 cursor-pointer">
                  <img
                    src={creativeImg}
                    alt="Women Collection"
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-5 text-white">
                    <span className="font-bebas text-2xl tracking-wider">WOMEN</span>
                    <span className="text-xs uppercase tracking-widest flex items-center gap-1 group-hover:underline">
                      Shop <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* KIDS */}
                <div className="relative group rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 cursor-pointer">
                  <img
                    src={clothesRackImg}
                    alt="Kids Collection"
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-5 text-white">
                    <span className="font-bebas text-2xl tracking-wider">KIDS</span>
                    <span className="text-xs uppercase tracking-widest flex items-center gap-1 group-hover:underline">
                      Shop <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
