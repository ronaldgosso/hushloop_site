import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, SkipForward, Volume2, VolumeX, ShieldAlert, Timer, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SpotlightCard } from './motion/SpotlightCard';

type Phase = 'focus' | 'short_break' | 'long_break';

const PHASE_DURATIONS: Record<Phase, number> = {
  focus: 25 * 60,
  short_break: 5 * 60,
  long_break: 15 * 60,
};

export const InteractivePomodoroDemo: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('focus');
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(3);
  
  // Audio synthesis context for demo
  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Timer Tick
  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = window.setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            handlePhaseCompletion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, phase]);

  const handlePhaseCompletion = () => {
    setIsRunning(false);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#4eedde', '#ffffff'],
    });

    if (phase === 'focus') {
      setCompletedCycles((c) => c + 1);
      const nextPhase = completedCycles % 4 === 3 ? 'long_break' : 'short_break';
      setPhase(nextPhase);
      setRemainingSeconds(PHASE_DURATIONS[nextPhase]);
    } else {
      setPhase('focus');
      setRemainingSeconds(PHASE_DURATIONS.focus);
    }
  };

  const handleToggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingSeconds(PHASE_DURATIONS[phase]);
  };

  const handleSkip = () => {
    handlePhaseCompletion();
  };

  const handleSelectPhase = (newPhase: Phase) => {
    setIsRunning(false);
    setPhase(newPhase);
    setRemainingSeconds(PHASE_DURATIONS[newPhase]);
  };

  // Live Soundscape Audio
  const toggleSound = () => {
    if (soundEnabled) {
      stopAudio();
      setSoundEnabled(false);
    } else {
      startAudio();
      setSoundEnabled(true);
    }
  };

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(432, ctx.currentTime); // Carrier 432 Hz
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(442, ctx.currentTime); // Binaural offset +10 Hz alpha

      gain.gain.setValueAtTime(0.08, ctx.currentTime);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      osc1Ref.current = osc1;
      osc2Ref.current = osc2;
      gainRef.current = gain;
    } catch {
      // AudioContext not supported
    }
  };

  const stopAudio = () => {
    if (osc1Ref.current) {
      try {
        osc1Ref.current.stop();
        osc1Ref.current.disconnect();
      } catch {}
      osc1Ref.current = null;
    }
    if (osc2Ref.current) {
      try {
        osc2Ref.current.stop();
        osc2Ref.current.disconnect();
      } catch {}
      osc2Ref.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  // Format time MM:SS
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const timeFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  const totalDuration = PHASE_DURATIONS[phase];
  const progressPercent = ((totalDuration - remainingSeconds) / totalDuration) * 100;
  const circumference = 2 * Math.PI * 135;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const isFocus = phase === 'focus';
  const accentColor = isFocus ? '#00f2fe' : '#ff4b72';

  // Simulated Volume percentage
  const simulatedVolume = isRunning && isFocus ? 0 : 100;

  return (
    <section id="demo" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase mb-3">
            <Timer className="w-3.5 h-3.5" />
            Interactive Live Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience the <span className="gradient-text-cyan">Acoustic Loop</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Test HushLoop's drift-resistant timer, active volume ducking simulation, and procedural binaural soundscapes right in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Main Interactive App Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Glow border ring */}
              <div
                className="absolute -inset-1 rounded-[32px] blur-xl opacity-40 transition-all duration-700"
                style={{ backgroundColor: accentColor }}
              />

              {/* Frameless Glassmorphic Window (Dentale EHR Style) */}
              <div className="relative rounded-[28px] bg-[#0d1117]/95 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                {/* Custom Frameless Window Drag Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-neutral-400 ml-2">HushLoop • Win11</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isRunning ? 'bg-cyan-400 animate-pulse' : 'bg-neutral-500'
                      }`}
                    />
                    <span>{isRunning ? (isFocus ? 'SILENCING ON' : 'BREAK RESTORED') : 'IDLE'}</span>
                  </div>
                </div>

                {/* Phase Pills Selector */}
                <div className="mt-6 grid grid-cols-3 gap-2 bg-[#161b22] p-1 rounded-2xl border border-white/5">
                  <button
                    onClick={() => handleSelectPhase('focus')}
                    className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                      phase === 'focus'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-glow-cyan'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Focus (25m)
                  </button>
                  <button
                    onClick={() => handleSelectPhase('short_break')}
                    className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                      phase === 'short_break'
                        ? 'bg-coral-500/20 text-coral-400 border border-coral-500/40 shadow-glow-coral'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Short (5m)
                  </button>
                  <button
                    onClick={() => handleSelectPhase('long_break')}
                    className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                      phase === 'long_break'
                        ? 'bg-coral-500/20 text-coral-400 border border-coral-500/40 shadow-glow-coral'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Long (15m)
                  </button>
                </div>

                {/* Circular Timer Visualizer */}
                <div className="relative my-8 flex items-center justify-center">
                  <svg className="w-64 h-64 -rotate-90 transform" viewBox="0 0 300 300">
                    {/* Background Track */}
                    <circle
                      cx="150"
                      cy="150"
                      r="135"
                      className="stroke-[#161b22]"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    {/* Glowing Progress Arc */}
                    <circle
                      cx="150"
                      cy="150"
                      r="135"
                      stroke={accentColor}
                      strokeWidth="10"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000 ease-linear"
                      style={{
                        filter: `drop-shadow(0 0 8px ${accentColor})`,
                      }}
                    />
                  </svg>

                  {/* Inside Circle Info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-1">
                      {isFocus ? 'Focus Interval' : 'Rest & Recharge'}
                    </span>
                    <span className="text-5xl font-mono font-bold text-white tracking-tight">
                      {timeFormatted}
                    </span>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                      <span>Cycle {completedCycles % 4 + 1} of 4</span>
                    </div>
                  </div>
                </div>

                {/* Floating Dock Controls */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    aria-label="Reset Timer"
                    className="p-3 rounded-2xl bg-[#161b22] border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all active:scale-90"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleToggleTimer}
                    aria-label={isRunning ? 'Pause' : 'Play'}
                    className={`px-8 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2.5 transition-all shadow-lg active:scale-95 ${
                      isFocus
                        ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-obsidian-950 shadow-glow-cyan hover:brightness-110'
                        : 'bg-gradient-to-r from-coral-400 to-coral-500 text-white shadow-glow-coral hover:brightness-110'
                    }`}
                  >
                    {isRunning ? (
                      <>
                        <Pause className="w-5 h-5 fill-current" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 fill-current" />
                        <span>{remainingSeconds === totalDuration ? 'Start Focus' : 'Resume'}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleSkip}
                    aria-label="Skip to Next Phase"
                    className="p-3 rounded-2xl bg-[#161b22] border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all active:scale-90"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>

                  <button
                    onClick={toggleSound}
                    title={soundEnabled ? 'Mute Soundscape' : 'Play 432Hz Alpha Waves'}
                    className={`p-3 rounded-2xl border transition-all active:scale-90 ${
                      soundEnabled
                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400 shadow-glow-cyan'
                        : 'bg-[#161b22] border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Volume2 className={`w-4 h-4 ${soundEnabled ? 'animate-bounce' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Explanation & Simulated Telemetry HUD */}
          <div className="lg:col-span-5 space-y-5">
            <SpotlightCard className="p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${simulatedVolume === 0 ? 'bg-cyan-500/10 text-cyan-400' : 'bg-green-500/10 text-green-400'}`}>
                  {simulatedVolume === 0 ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">Active Windows 11 Silencer</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300">
                      winmm.dll
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                    HushLoop interfaces directly with the Windows multimedia subsystem to duck notification noises and chat rings.
                  </p>

                  {/* Volume Gauge */}
                  <div className="mt-4 p-3 rounded-xl bg-black/30 border border-white/5">
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-neutral-400">Master Audio Level:</span>
                      <span className={simulatedVolume === 0 ? 'text-cyan-400 font-bold' : 'text-green-400'}>
                        {simulatedVolume}% ({simulatedVolume === 0 ? 'Silenced' : 'Normal'})
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-700 ${
                          simulatedVolume === 0 ? 'w-0 bg-cyan-400' : 'w-full bg-green-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Crash-Recovery Ledger</h3>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                    Prior to touching system audio, original levels are written to <code className="text-cyan-300">%APPDATA%\HushLoop\silencer-session.json</code>. If Windows restarts or loses power, your volume is instantly restored on next launch.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-coral-500/10 text-coral-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Sleep-Immune Epoch Clocks</h3>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                    Calculated using absolute <code className="text-coral-300">Date.now()</code> epoch deltas. Zero timing drift when your laptop lid closes or Windows 11 suspends background threads.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
