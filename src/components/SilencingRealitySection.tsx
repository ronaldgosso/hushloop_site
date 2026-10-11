import React from 'react';
import { AlertCircle, CheckCircle2, Shield, Keyboard, ExternalLink } from 'lucide-react';
import { SpotlightCard } from './motion/SpotlightCard';

export const SilencingRealitySection: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard className="p-8 sm:p-10 border-cyan-500/30">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Shield className="w-8 h-8" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Engineering Transparency
                </span>
                <span className="text-xs text-neutral-400">Windows 11 Security Reality</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Why HushLoop Ducks Master Volume Instead of Faking DND
              </h3>

              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                Windows 11 enforces strict sandboxing: the internal Focus Assist / Do Not Disturb APIs (<code className="text-cyan-300">Windows.UI.Notifications.Management.UserNotificationListener</code>) require either elevated Administrator privileges or an AppContainer package identity that would trigger invasive UAC prompts.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-bold mb-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>How Other Apps Mislead</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Many tools claim to silence notifications but fail without root admin privileges, leaving you vulnerable to loud unexpected notification chimes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>The Honest HushLoop Engine</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    We mute master auditory output at the low-level <code className="text-neutral-200">winmm.dll</code> driver layer during focus. Auditory disruptions are genuinely suppressed without intrusive UAC popups.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-cyan-400" />
                  <span>Pro-tip: Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[11px]">Win + N</kbd> anytime to toggle Windows 11 Visual Focus Assist.</span>
                </div>
                <a
                  href="https://github.com/ronaldgosso/hushloop/blob/main/docs/WINDOWS_SILENCING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:underline font-medium"
                >
                  <span>Read Windows Silencing Whitepaper</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
