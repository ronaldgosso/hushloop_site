import { Code, User, Heart, ExternalLink, Terminal, Shield, Award } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { TiltedCard } from './reactbits/TiltedCard';
import { ShinyText } from './reactbits/ShinyText';
import { MagnetButton } from './reactbits/MagnetButton';

export const CreatorAttributionSection: React.FC = () => {
  return (
    <section id="creator" className="py-24 relative z-10 border-t border-white/5 bg-[#090d12]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-mono uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            Creator Spotlight
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed & Engineered by <span className="gradient-text-cyan">Ronald Gosso</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            HushLoop was envisioned and crafted from the ground up to solve the real frustrations of Windows 11 productivity tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TiltedCard maxAngle={8}>
            <SpotlightCard className="p-8 sm:p-12 border-cyan-500/30 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                {/* Creator Avatar & Lockup */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-400 via-teal-500 to-[#0077b6] p-[2px] shadow-glow-cyan">
                    <div className="w-full h-full bg-[#0d1117] rounded-[22px] overflow-hidden flex items-center justify-center">
                      <img
                        src="./images/profile.png"
                        alt="Ronald Gosso - Author & Creator of HushLoop"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-[#161b22] border border-white/10 text-cyan-400 shadow-md" title="Author & Creator">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                {/* Creator Bio & Story */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <h3 className="text-2xl font-bold text-white">Ronald Gosso</h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      Software Architect & Creator
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    "I built HushLoop because I was tired of Pomodoro apps that secretly drifted when my Windows laptop went to sleep, bundled hundreds of megabytes of distracting MP3 audio files, or failed to silence Windows notification chimes when I needed deep concentration."
                  </p>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Engineered with <strong>99.8% Vitest test coverage</strong> across 52 unit tests, zero-asset procedural Web Audio synthesis, write-ahead crash safety, and strict process isolation.
                  </p>

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-2 text-[11px] font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      TypeScript 5.6
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      Electron 33
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      React 18 & Vite
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      Web Audio API (432Hz)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      99.77% Test Coverage
                    </span>
                  </div>

                  {/* Social / GitHub Links */}
                  <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <MagnetButton
                      href="https://github.com/ronaldgosso"
                      target="_blank"
                      rel="noopener noreferrer"
                      strength={10}
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all">
                        <GithubIcon className="w-4 h-4" />
                        <span>github.com/ronaldgosso</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </div>
                    </MagnetButton>

                    <MagnetButton
                      href="https://github.com/ronaldgosso/hushloop"
                      target="_blank"
                      rel="noopener noreferrer"
                      strength={10}
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs font-semibold text-cyan-300 transition-all shadow-glow-cyan">
                        <Code className="w-4 h-4" />
                        <span>Star HushLoop Repository</span>
                      </div>
                    </MagnetButton>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </TiltedCard>
        </div>
      </div>
    </section>
  );
};
