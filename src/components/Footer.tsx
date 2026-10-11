import React from 'react';
import { Heart, ExternalLink, ArrowUp } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { ShinyText } from './reactbits/ShinyText';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#06080c] pt-16 pb-28 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Creator */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-[#0077b6] p-[1px]">
                <div className="w-full h-full bg-[#0d1117] rounded-[11px] flex items-center justify-center p-1">
                  <img
                    src="./images/hushloop_app_icon.png"
                    alt="HushLoop Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = './favicon.svg';
                    }}
                  />
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">HushLoop</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                v1.1.3
              </span>
            </div>
            <p className="text-neutral-400 max-w-md text-xs leading-relaxed">
              Active Pomodoro desktop timer for Windows 11 with automated distraction silencing, procedural Web Audio soundscapes, native tray, and global hotkeys.
            </p>
            <p className="text-neutral-300 text-xs pt-1">
              Conceived, designed, and engineered with precision by{' '}
              <a
                href="https://github.com/ronaldgosso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:underline"
              >
                Ronald Gosso
              </a>
              .
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Project Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#demo" className="hover:text-cyan-400 transition-colors">
                  Interactive Simulator
                </a>
              </li>
              <li>
                <a href="#soundscapes" className="hover:text-cyan-400 transition-colors">
                  Web Audio Synthesizer
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-cyan-400 transition-colors">
                  Windows Distribution
                </a>
              </li>
            </ul>
          </div>

          {/* Open Source & Community */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Open Source
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/ronaldgosso/hushloop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ronaldgosso/hushloop/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Releases & Binaries</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ronaldgosso/hushloop/blob/main/docs/ARCHITECTURE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Architecture Documentation</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ronaldgosso/hushloop/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>MIT / CC0 License</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 <strong className="text-white">Ronald Gosso</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-neutral-400">
              Built with <Heart className="w-3.5 h-3.5 text-coral-500 fill-coral-500" /> for Windows 11 Flow
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/5 transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
