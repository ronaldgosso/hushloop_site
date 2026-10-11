import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Radio, CloudRain, Bell, Waves } from 'lucide-react';
import { SpotlightCard } from './reactbits/SpotlightCard';

type Preset = 'alpha' | 'rain' | 'chime';

export const SoundscapeSynthesizerDemo: React.FC = () => {
  const [activePreset, setActivePreset] = useState<Preset | null>(null);
  const [volume, setVolume] = useState(0.4);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeNodesRef = useRef<Array<{ stop?: () => void; disconnect: () => void }>>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const stopAllAudio = () => {
    activeNodesRef.current.forEach((n) => {
      try {
        if (n.stop) n.stop();
        n.disconnect();
      } catch {}
    });
    activeNodesRef.current = [];

    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setActivePreset(null);
  };

  const initContext = () => {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    audioCtxRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume, ctx.currentTime);
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    return { ctx, masterGain };
  };

  const playAlphaWaves = () => {
    stopAllAudio();
    const { ctx, masterGain } = initContext();

    // 432 Hz carrier + 442 Hz offset = 10 Hz Alpha state binaural difference
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const panner1 = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    const panner2 = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(432, ctx.currentTime);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(442, ctx.currentTime);

    if (panner1 && panner2) {
      panner1.pan.setValueAtTime(-0.8, ctx.currentTime);
      panner2.pan.setValueAtTime(0.8, ctx.currentTime);
      osc1.connect(panner1);
      panner1.connect(masterGain);
      osc2.connect(panner2);
      panner2.connect(masterGain);
      activeNodesRef.current.push(panner1, panner2);
    } else {
      osc1.connect(masterGain);
      osc2.connect(masterGain);
    }

    osc1.start();
    osc2.start();
    activeNodesRef.current.push(osc1, osc2);
    setActivePreset('alpha');
  };

  const playRainAmbience = () => {
    stopAllAudio();
    const { ctx, masterGain } = initContext();

    // Procedural Pink Noise via Buffer
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
      b6 = white * 0.115926;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Dual Resonant Biquad Filter simulating rain frequencies
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(950, ctx.currentTime);
    filter.Q.setValueAtTime(1.8, ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(masterGain);

    whiteNoise.start();
    activeNodesRef.current.push(whiteNoise, filter);
    setActivePreset('rain');
  };

  const playChime = () => {
    stopAllAudio();
    const { ctx, masterGain } = initContext();

    // Harmonically tuned bell envelope
    const frequencies = [528, 1056, 1584];
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const decayTime = 2.5 - idx * 0.4;
      gain.gain.setValueAtTime(0.2 / (idx + 1), ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decayTime);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(ctx.currentTime + decayTime);
      activeNodesRef.current.push(osc, gain);
    });

    setActivePreset('chime');
    setTimeout(() => {
      if (activePreset === 'chime') setActivePreset(null);
    }, 2800);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, []);

  return (
    <section id="soundscapes" className="py-24 relative z-10 bg-[#090d12]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase mb-3">
            <Waves className="w-3.5 h-3.5" />
            Zero-Asset Audio Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Procedural Soundscapes <span className="gradient-text-cyan">In Real-Time</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            HushLoop eliminates heavy 100MB MP3 downloads. Everything is generated client-side using pure math and the Web Audio API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Preset 1: Alpha Waves */}
          <SpotlightCard className={`p-6 cursor-pointer transition-all ${activePreset === 'alpha' ? 'border-cyan-400 shadow-glow-cyan' : ''}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Radio className="w-6 h-6" />
              </div>
              {activePreset === 'alpha' && (
                <div className="flex items-end gap-1 h-5">
                  <span className="w-1 bg-cyan-400 rounded-full audio-bar-1" />
                  <span className="w-1 bg-cyan-400 rounded-full audio-bar-2" />
                  <span className="w-1 bg-cyan-400 rounded-full audio-bar-3" />
                  <span className="w-1 bg-cyan-400 rounded-full audio-bar-4" />
                </div>
              )}
            </div>

            <h3 className="text-lg font-bold text-white">Alpha Waves (432 Hz)</h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Binaural frequency offset (432Hz left, 442Hz right) generating a 10Hz Alpha differential that entrains relaxed, razor-sharp focus.
            </p>

            <button
              onClick={activePreset === 'alpha' ? stopAllAudio : playAlphaWaves}
              className={`mt-6 w-full py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                activePreset === 'alpha'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                  : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30'
              }`}
            >
              {activePreset === 'alpha' ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{activePreset === 'alpha' ? 'Stop Synthesis' : 'Listen to 432 Hz'}</span>
            </button>
          </SpotlightCard>

          {/* Preset 2: Rain Ambience */}
          <SpotlightCard className={`p-6 cursor-pointer transition-all ${activePreset === 'rain' ? 'border-teal-400 shadow-glow-cyan' : ''}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                <CloudRain className="w-6 h-6" />
              </div>
              {activePreset === 'rain' && (
                <div className="flex items-end gap-1 h-5">
                  <span className="w-1 bg-teal-400 rounded-full audio-bar-1" />
                  <span className="w-1 bg-teal-400 rounded-full audio-bar-3" />
                  <span className="w-1 bg-teal-400 rounded-full audio-bar-2" />
                  <span className="w-1 bg-teal-400 rounded-full audio-bar-5" />
                </div>
              )}
            </div>

            <h3 className="text-lg font-bold text-white">Pink Noise Rain</h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Synthesized pink noise passed through dual resonant lowpass Biquad filters simulating natural acoustic rainfall masking ambient noises.
            </p>

            <button
              onClick={activePreset === 'rain' ? stopAllAudio : playRainAmbience}
              className={`mt-6 w-full py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                activePreset === 'rain'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                  : 'bg-teal-500/20 text-teal-400 border border-teal-500/40 hover:bg-teal-500/30'
              }`}
            >
              {activePreset === 'rain' ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{activePreset === 'rain' ? 'Stop Rain' : 'Listen to Rain'}</span>
            </button>
          </SpotlightCard>

          {/* Preset 3: Mindful Bell */}
          <SpotlightCard className={`p-6 cursor-pointer transition-all ${activePreset === 'chime' ? 'border-coral-400 shadow-glow-coral' : ''}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-coral-500/10 text-coral-400">
                <Bell className="w-6 h-6" />
              </div>
              {activePreset === 'chime' && (
                <div className="flex items-end gap-1 h-5">
                  <span className="w-1 bg-coral-400 rounded-full audio-bar-2" />
                  <span className="w-1 bg-coral-400 rounded-full audio-bar-4" />
                </div>
              )}
            </div>

            <h3 className="text-lg font-bold text-white">Harmonic Chime</h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Tri-harmonic sine wave bell (528Hz, 1056Hz, 1584Hz) with exponential decay curve announcing interval completions.
            </p>

            <button
              onClick={playChime}
              className="mt-6 w-full py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 bg-coral-500/20 text-coral-400 border border-coral-500/40 hover:bg-coral-500/30"
            >
              <Bell className="w-4 h-4" />
              <span>Ring Bell Chime</span>
            </button>
          </SpotlightCard>
        </div>

        {/* Volume Controller Bar */}
        {activePreset && (
          <div className="mt-8 max-w-md mx-auto p-4 rounded-2xl bg-[#161b22]/90 border border-white/10 flex items-center gap-4 animate-fadeIn">
            <Volume2 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-neutral-300 font-mono">Volume:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="flex-1 accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-mono text-neutral-400 w-10 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
