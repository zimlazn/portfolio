import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Linkedin, MapPin, Copy, Check, ArrowUp } from 'lucide-react';

interface ContactSectionProps {
  onReplayIntro: () => void;
  onScrollToTop: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onReplayIntro,
  onScrollToTop,
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'arhamalmizan@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 bg-[#0a0a0a] text-[#EDE8DF] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
            CONTACT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-wide">
              Let&apos;s create{' '}
              <span className="text-[#E2D9CC] block font-playfair italic font-normal">
                something meaningful.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 font-light max-w-md leading-relaxed">
              Have a project in mind, a question, or simply want to talk about an idea? I&apos;d love to hear from you.
            </p>

            {/* Direct Contact Cards (matches 01:54 in video) */}
            <div className="space-y-4 pt-4">
              {/* Email Card with Copy button */}
              <div
                onClick={handleCopyEmail}
                className="group p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-300 group-hover:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      Email me
                    </span>
                    <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="p-2 rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-300 group-hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      Connect
                    </span>
                    <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white">
                      LinkedIn
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors">
                  ↗
                </div>
              </a>

              {/* Based in Pakistan Card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-300">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      Based in
                    </span>
                    <span className="text-sm sm:text-base font-medium text-neutral-200">
                      Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (matches 01:54 in video) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-neutral-950/80 border border-neutral-800/80 p-8 sm:p-10 rounded-3xl shadow-xl"
          >
            {isSuccess ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-bebas text-3xl text-white tracking-wider">
                  MESSAGE SENT SUCCESSFULLY!
                </h3>
                <p className="text-sm text-neutral-400 font-light max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-neutral-900 border border-neutral-700 text-xs rounded-full text-neutral-300 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-caveat text-xl text-neutral-300 font-bold">Mizan</span>
            <span>—</span>
            <span>© 2026 Mizan Panggabean. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onReplayIntro}
              className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
            >
              Replay Intro
            </button>
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
