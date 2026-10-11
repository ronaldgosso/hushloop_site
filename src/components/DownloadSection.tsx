import React from 'react';
import { Download, Package, HardDrive, Building2, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './motion/SpotlightCard';
import { MagnetButton } from './motion/MagnetButton';
import { ShinyText } from './motion/ShinyText';

export const DownloadSection: React.FC = () => {
  const GITHUB_RELEASE_BASE = 'https://github.com/ronaldgosso/hushloop/releases';

  return (
    <section id="download" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase mb-3">
            <Package className="w-3.5 h-3.5" />
            Distribution Targets
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Download <span className="gradient-text-cyan">HushLoop for Windows 11</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Choose your preferred packaging format. Free, open source, and verified for Windows 11 and Windows 10 x64.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Option 1: Setup Installer */}
          <SpotlightCard className="p-7 flex flex-col justify-between border-cyan-500/30 shadow-glow-cyan">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Recommended
                </span>
                <span className="text-xs text-neutral-400 font-mono">v2.0.0 • ~84 MB</span>
              </div>

              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
                <HardDrive className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white">Setup Installer</h3>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Standard Windows executable installer. Configures Start Menu icons, desktop shortcut, uninstall registration, and autorun options.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Desktop & Start Menu Shortcuts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Windows Notification Area Tray</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Seamless Auto-Launch on Finish</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <MagnetButton
                href={`${GITHUB_RELEASE_BASE}/latest`}
                target="_blank"
                rel="noopener noreferrer"
                strength={10}
                className="w-full"
              >
                <div className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-obsidian-950 font-bold text-xs flex items-center justify-center gap-2 shadow-glow-cyan hover:brightness-110 active:scale-95 transition-all">
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download Setup .EXE</span>
                </div>
              </MagnetButton>
              <p className="text-[11px] text-center text-neutral-500 mt-2 font-mono">
                HushLoop-Setup-2.0.0.exe
              </p>
            </div>
          </SpotlightCard>

          {/* Option 2: Portable App */}
          <SpotlightCard className="p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  Instant Run
                </span>
                <span className="text-xs text-neutral-400 font-mono">v2.0.0 • ~84 MB</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 text-teal-400 w-fit mb-4">
                <Package className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white">Portable Executable</h3>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Self-contained executable requiring zero installation. Run straight from your Downloads folder or USB thumb drive.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>No Administrator Rights Required</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>Leaves Zero System Registry Residue</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>Full Audio Ducking & Web Audio</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <MagnetButton
                href={`${GITHUB_RELEASE_BASE}/latest`}
                target="_blank"
                rel="noopener noreferrer"
                strength={10}
                className="w-full"
              >
                <div className="w-full py-3.5 rounded-xl bg-[#161b22] border border-white/10 hover:border-cyan-500/40 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#21262d] active:scale-95 transition-all">
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Portable .EXE</span>
                </div>
              </MagnetButton>
              <p className="text-[11px] text-center text-neutral-500 mt-2 font-mono">
                HushLoop-Portable-2.0.0.exe
              </p>
            </div>
          </SpotlightCard>

          {/* Option 3: Enterprise MSI */}
          <SpotlightCard className="p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  IT Deployment
                </span>
                <span className="text-xs text-neutral-400 font-mono">v2.0.0 • ~94 MB</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 text-coral-400 w-fit mb-4">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white">Enterprise MSI</h3>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Windows Installer package built via WiX Toolset. Designed for IT admins deploying across corporate fleets via Active Directory GPO or Intune.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-coral-400" />
                  <span>Supports Silent GPO MSIEXEC Flags</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-coral-400" />
                  <span>Microsoft Intune Compatible</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-coral-400" />
                  <span>Centralized IT Uninstall Keys</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <MagnetButton
                href={`${GITHUB_RELEASE_BASE}/latest`}
                target="_blank"
                rel="noopener noreferrer"
                strength={10}
                className="w-full"
              >
                <div className="w-full py-3.5 rounded-xl bg-[#161b22] border border-white/10 hover:border-coral-500/40 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#21262d] active:scale-95 transition-all">
                  <Download className="w-4 h-4 text-coral-400" />
                  <span>Download MSI Package</span>
                </div>
              </MagnetButton>
              <p className="text-[11px] text-center text-neutral-500 mt-2 font-mono">
                HushLoop-2.0.0.msi
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* Advanced Installer Callout */}
        <div className="mt-12 max-w-4xl mx-auto p-5 rounded-2xl bg-[#161b22]/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Custom Advanced Installer Packaging Available</h4>
              <p className="text-xs text-neutral-400">
                Includes pre-configured <code className="text-cyan-300">HushLoop.aip</code> and uncompressed application files for Caphyon Advanced Installer.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/ronaldgosso/hushloop/tree/main/advanced-installer-package"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 shrink-0"
          >
            <span>View AIP Assets in Git</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
