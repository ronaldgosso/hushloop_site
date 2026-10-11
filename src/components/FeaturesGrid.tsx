import React from 'react';
import { Layout, Keyboard, Activity, Zap, VolumeX, Shield, Waves } from 'lucide-react';
import { SpotlightCard } from './motion/SpotlightCard';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <VolumeX className="w-6 h-6 text-cyan-400" />,
      title: 'Automated Audio Ducking',
      description:
        'Silences background system dings and notification pings during focus sessions via native winmm.dll drivers, automatically restoring audio on mindful breaks.',
      badge: 'Active Silence',
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-400" />,
      title: 'Zero-Drift Epoch Timing',
      description:
        'Tracks absolute epoch timestamps instead of naive tick counters. Perfectly handles sleep mode, screen locks, and Windows 11 power-saving thread suspensions.',
      badge: 'Drift Proof',
    },
    {
      icon: <Waves className="w-6 h-6 text-cyan-300" />,
      title: 'Procedural Web Audio Synth',
      description:
        'Zero bulky audio files. Dual binaural oscillators and algorithmic pink-noise filters create uninterrupted 432 Hz focus soundscapes without streaming.',
      badge: 'Zero MP3s',
    },
    {
      icon: <Keyboard className="w-6 h-6 text-coral-400" />,
      title: 'Global Hotkey & Tray Dock',
      description:
        'Toggle focus instantly from any IDE or spreadsheet with Ctrl+Alt+F. Minimizes to the Windows 11 taskbar tray with live remaining time tooltips.',
      badge: 'Ctrl+Alt+F',
    },
    {
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      title: 'Dentale EHR Glassmorphism',
      description:
        'Inspired by modern healthcare workstation software. Obsidian surfaces with 16px backdrop blur, vibrant glowing progress arcs, and an ergonomic floating dock.',
      badge: 'Windows 11 Fluent',
    },
    {
      icon: <Activity className="w-6 h-6 text-green-400" />,
      title: 'Crash-Recovery Ledger',
      description:
        'Original volume is committed to a write-ahead ledger before mutation. If power drops or Windows restarts, your audio levels are restored seamlessly on boot.',
      badge: 'Failsafe',
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10 bg-[#090d12]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            Product Features
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for <span className="gradient-text-cyan">Hyper-Focused Minds</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Every feature was engineered to eliminate friction between your intention to work and your ability to maintain uninterrupted flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feat, idx) => (
            <SpotlightCard key={idx} className="p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-medium text-cyan-400/80">
                <span>Verified in v2.0.0</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
