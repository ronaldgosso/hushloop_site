import React, { useState } from 'react';
import { Cpu, ShieldCheck, Clock, Zap, Database, ExternalLink } from 'lucide-react';
import { SpotlightCard } from './motion/SpotlightCard';

export const ArchitectureTour: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timer' | 'silencer' | 'audio' | 'ledger'>('timer');

  return (
    <section id="architecture" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="gradient-text-cyan">Zero Compromises</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            A deep look under the hood into HushLoop's process isolation, low-overhead native Windows 11 interop, and crash-resilient ledger.
          </p>
        </div>

        {/* Interactive Architecture Tabs */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-wrap justify-center gap-2 bg-[#161b22]/70 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('timer')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'timer'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-glow-cyan'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            Epoch Timer Engine
          </button>
          <button
            onClick={() => setActiveTab('silencer')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'silencer'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-glow-cyan'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            WinMM Audio Silencer
          </button>
          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'ledger'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-glow-cyan'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            Crash Recovery Ledger
          </button>
          <button
            onClick={() => setActiveTab('audio')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'audio'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-glow-cyan'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Strict CSP Synthesis
          </button>
        </div>

        {/* Tab Detail Display */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'timer' && (
            <SpotlightCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">
                    Drift-Resistant Epoch Clock
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">
                    Why Naïve setInterval Counters Fail
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    Most web/desktop timers rely on counting decrements in an interval (<code className="text-cyan-300">setInterval(t--, 1000)</code>).
                    When Windows 11 powers down threads during laptop lid closing, sleep, or background throttling, interval calls get paused or batched. A 25-minute session can silently take 45 real minutes.
                  </p>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    <strong>HushLoop's Solution:</strong> The <code className="text-cyan-300">TimerEngine</code> captures the absolute startup epoch timestamp (<code className="text-cyan-300">Date.now()</code>) and accumulates paused interval duration deltas. It is completely immune to clock drift under all OS states.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#06080c] border border-white/5 font-mono text-xs text-neutral-300 space-y-2">
                  <div className="text-neutral-500">// HushLoop Drift-Free Formula</div>
                  <div className="text-cyan-400">const now = Date.now();</div>
                  <div className="text-neutral-300">const elapsed = (now - this.startTimestamp) - this.totalPausedDuration;</div>
                  <div className="text-teal-400">const remaining = Math.max(0, this.targetDuration - elapsed);</div>
                  <div className="pt-2 text-green-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Tested across 52 Vitest specs (99.8% coverage)</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          )}

          {activeTab === 'silencer' && (
            <SpotlightCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">
                    Native Interop Subsystem
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">
                    Direct winmm.dll Audio Manipulation
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    Rather than bundling bulky C++ binaries or external automation daemons, HushLoop communicates via lightweight Windows Multimedia APIs (<code className="text-cyan-300">winmm.dll</code>).
                  </p>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    During a Focus interval, the background controller safely ducks or mutes system alerts so sudden email notification dings never break your deep cognitive trance. When a break occurs, volume is cleanly restored.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#06080c] border border-white/5 font-mono text-xs text-neutral-300 space-y-2">
                  <div className="text-neutral-500">// Native Audio Driver Call</div>
                  <div className="text-neutral-400">await this.ledger.recordInitialVolume(currentVol);</div>
                  <div className="text-cyan-400">await this.driver.setMasterVolume(0); // Mute</div>
                  <div className="text-neutral-500">// On Break Phase:</div>
                  <div className="text-teal-400">await this.driver.setMasterVolume(originalVol);</div>
                  <div className="pt-2 text-neutral-400 text-[11px]">
                    Non-invasive & runs without elevated admin privileges.
                  </div>
                </div>
              </div>
            </SpotlightCard>
          )}

          {activeTab === 'ledger' && (
            <SpotlightCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono uppercase text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded">
                    Failsafe Persistence
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">
                    Write-Ahead Crash Ledger
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    What happens if Windows 11 force-reboots for an update, or a laptop loses power while HushLoop has master volume muted?
                  </p>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    HushLoop executes a strict write-ahead protocol: the original volume is persisted to <code className="text-teal-300">%APPDATA%\HushLoop\silencer-session.json</code> <em>before</em> any system volume call. On launch, the recovery engine detects dangling locks and restores full volume automatically.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#06080c] border border-white/5 font-mono text-xs text-neutral-300 space-y-2">
                  <div className="text-neutral-500">// Recovery Ledger Schema</div>
                  <div className="text-teal-300">{`{`}</div>
                  <div className="pl-4 text-cyan-300">"volumePercent": 72,</div>
                  <div className="pl-4 text-cyan-300">"isMuted": false,</div>
                  <div className="pl-4 text-cyan-300">"timestamp": 1728688400000,</div>
                  <div className="pl-4 text-cyan-300">"inSession": true</div>
                  <div className="text-teal-300">{`}`}</div>
                  <div className="pt-2 text-green-400 text-[11px]">
                    Automatic restoration on crash with UI notification banner.
                  </div>
                </div>
              </div>
            </SpotlightCard>
          )}

          {activeTab === 'audio' && (
            <SpotlightCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono uppercase text-coral-400 bg-coral-500/10 px-2.5 py-1 rounded">
                    High Security & Performance
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">
                    Strict CSP & Zero File Assets
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    Traditional focus tools bundle gigabytes of ambient MP3 files or stream from remote servers, introducing security vulnerabilities, bandwidth drain, and audio looping glitches.
                  </p>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    HushLoop runs under strict Content Security Policy (<code className="text-coral-300">media-src 'self' data:; connect-src 'self'</code>). Audio waves are computed on the fly using dual oscillators, stereo panners, and pink-noise algorithmic buffers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#06080c] border border-white/5 font-mono text-xs text-neutral-300 space-y-2">
                  <div className="text-neutral-500">// Zero Audio File Overhead</div>
                  <div className="text-cyan-400">Total Sound File Size: 0 KB</div>
                  <div className="text-teal-400">Audio Cache Footprint: 0 MB</div>
                  <div className="text-coral-400">Network Bandwidth Usage: 0 kbps</div>
                  <div className="pt-2 text-neutral-300 text-[11px]">
                    Runs in air-gapped secure enterprise environments without streaming.
                  </div>
                </div>
              </div>
            </SpotlightCard>
          )}
        </div>

        {/* Embedded Architecture Diagram Preview */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117] p-2 shadow-2xl">
          <div className="p-4 border-b border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span>FIGURE 1.0: SYSTEM ARCHITECTURE & PROCESS ISOLATION</span>
            <a
              href="https://github.com/ronaldgosso/hushloop/blob/main/docs/ARCHITECTURE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-400 hover:underline"
            >
              <span>Full Spec in Docs</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <img
            src="./images/system_architecture_diagram.jpg"
            alt="HushLoop System Architecture Diagram"
            className="w-full h-auto rounded-2xl object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = './images/architecture_process_model.jpg';
            }}
          />
        </div>
      </div>
    </section>
  );
};
