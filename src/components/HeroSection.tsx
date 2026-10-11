import React from 'react';
import { Download, Waves, VolumeX, Shield, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MagnetButton } from './reactbits/MagnetButton';
import { BlurText } from './reactbits/BlurText';
import { ShinyText } from './reactbits/ShinyText';
import { DecryptedText } from './reactbits/DecryptedText';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161b22]/90 border border-cyan-500/30 backdrop-blur-md shadow-glow-cyan text-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-neutral-300">
              Crafted by <strong className="text-white">Ronald Gosso</strong> for Windows 11
            </span>
            <span className="text-cyan-400/50">•</span>
            <ShinyText text="Native Fluent Glassmorphism" className="text-cyan-400 font-medium" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            <span>Total Silence.</span>{' '}
            <span className="gradient-text-cyan">
              <BlurText text="Pure Cognitive Flow." delay={60} />
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            The intelligent desktop Pomodoro timer that actively ducks Windows 11 system sounds,
            synthesizes real-time binaural soundscapes with zero audio assets, and never drifts when your PC sleeps.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagnetButton href="#download" strength={15}>
              <div className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-teal-400 text-obsidian-950 font-bold text-sm shadow-glow-cyan hover:shadow-cyan-400/50 transition-all duration-300 active:scale-95">
                <Download className="w-5 h-5 stroke-[2.3] transition-transform group-hover:-translate-y-0.5" />
                <span>Download HushLoop v2.0.0</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-black/15 font-mono">
                  Windows x64
                </span>
              </div>
            </MagnetButton>

            <MagnetButton href="#demo" strength={12}>
              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#161b22]/90 border border-white/10 text-white font-semibold text-sm hover:border-cyan-500/40 hover:bg-[#21262d] transition-all duration-300 backdrop-blur-md active:scale-95">
                <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                <span>Try Live Simulator</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </MagnetButton>
          </div>

          {/* Live Telemetry Bar */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 py-2.5 rounded-2xl bg-[#0d1117]/80 border border-white/5 backdrop-blur-md text-[11px] text-neutral-400">
            <div className="flex items-center gap-2">
              <VolumeX className="w-3.5 h-3.5 text-cyan-400" />
              <span>DRIVER:</span>
              <DecryptedText text="WINMM.DLL NATIVE AUDIO DUCKING" speed={30} className="text-neutral-200 font-mono" animateOn="view" />
            </div>
            <div className="hidden sm:block text-white/10">•</div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>TIMER:</span>
              <DecryptedText text="DRIFT-RESISTANT EPOCH DELTAS" speed={30} className="text-neutral-200 font-mono" animateOn="view" />
            </div>
            <div className="hidden sm:block text-white/10">•</div>
            <div className="flex items-center gap-2">
              <Waves className="w-3.5 h-3.5 text-coral-400" />
              <span>SOUND:</span>
              <DecryptedText text="432Hz PROCEDURAL WEB AUDIO" speed={30} className="text-neutral-200 font-mono" animateOn="view" />
            </div>
          </div>

          {/* Verified Highlights */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Zero MP3 Bundles (Procedural Synth)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Crash-Recovery Write-Ahead Ledger</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Global Hotkey: Ctrl+Alt+F</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>100% Free & Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
