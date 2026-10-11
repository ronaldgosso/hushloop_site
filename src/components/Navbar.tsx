import React, { useState, useEffect } from 'react';
import { Download, User, Volume2, Clock, Cpu } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { MagnetButton } from './reactbits/MagnetButton';
import { ShinyText } from './reactbits/ShinyText';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d12]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#hero" className="flex items-center gap-3 group no-underline">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-[#0077b6] p-[1px] shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0d1117] rounded-[11px] flex items-center justify-center p-1.5">
              <img
                src="./images/hushloop_app_icon.png"
                alt="HushLoop Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to SVG if png not loaded
                  (e.currentTarget as HTMLImageElement).src = './favicon.svg';
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                HushLoop
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                v1.1.5
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 hidden sm:block">
              by <span className="text-neutral-200 font-medium">Ronald Gosso</span>
            </p>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161b22]/60 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5">
          <a
            href="#demo"
            className="px-3 py-1 text-xs font-medium text-neutral-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            Live Demo
          </a>
          <a
            href="#soundscapes"
            className="px-3 py-1 text-xs font-medium text-neutral-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all flex items-center gap-1.5"
          >
            <Volume2 className="w-3.5 h-3.5 text-teal-400" />
            Soundscapes
          </a>
          <a
            href="#architecture"
            className="px-3 py-1 text-xs font-medium text-neutral-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all flex items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Architecture
          </a>
          <a
            href="#creator"
            className="px-3 py-1 text-xs font-medium text-neutral-300 hover:text-coral-400 hover:bg-white/5 rounded-full transition-all flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-coral-400" />
            Creator
          </a>
          <a
            href="#download"
            className="px-3 py-1 text-xs font-medium text-neutral-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all"
          >
            Downloads
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Creator Attribution Badge */}
          <a
            href="https://github.com/ronaldgosso"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
          >
            <img
              src="./images/profile.png"
              alt="Ronald Gosso"
              className="w-4 h-4 rounded-full object-cover border border-cyan-400/60"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span>Engineered by</span>
            <ShinyText text="Ronald Gosso" className="font-semibold text-white" />
          </a>

          {/* GitHub Repo */}
          <a
            href="https://github.com/ronaldgosso/hushloop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="p-2 rounded-xl bg-[#161b22] border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Download CTA */}
          <MagnetButton href="#download" strength={10}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-[#06080c] text-xs font-semibold shadow-glow-cyan hover:shadow-cyan-500/50 hover:brightness-110 active:scale-95 transition-all">
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Get for Windows</span>
            </button>
          </MagnetButton>
        </div>
      </div>
    </header>
  );
};
