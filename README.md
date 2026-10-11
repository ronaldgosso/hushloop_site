# 🌐 HushLoop Official Project Website

> Stunning, interactive landing page for **HushLoop** — Active Pomodoro Desktop Timer for Windows 11.  
> Conceived, designed, and engineered by **[Ronald Gosso](https://github.com/ronaldgosso)**.

[![GitHub Pages Deployment](https://github.com/ronaldgosso/hushloop_site/actions/workflows/deploy.yml/badge.svg)](https://github.com/ronaldgosso/hushloop_site/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-00F2FE?logo=github)](https://ronaldgosso.github.io/hushloop_site/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

---

## ✨ Design & Visual Language

Built with inspirations from **[React Bits](https://reactbits.dev/)** and the **Dentale EHR** desktop aesthetic:

- **Interactive Canvas Particles (`ParticlesBackground`)**: Dynamic glowing particle mesh connecting with proximity lines and reacting to cursor physics.
- **Atmospheric Aurora (`SoftAurora`)**: Fluid animated color mesh with deep obsidian, electric cyan (`#00F2FE`), and subtle coral tones.
- **Cybernetic Text Decryption (`DecryptedText`)**: Glyph-cycling cybernetic animation for system telemetry labels.
- **Kinetic Blur Reveal (`BlurText`)**: Motion blur entrance animations for impactful typography.
- **Shimmer Glare (`ShinyText`)**: Continuous sweeping specular highlights across badges and titles.
- **Interactive Cursor Spotlight (`SpotlightCard`)**: Dynamic cursor-following radial light projection across cards.
- **3D Perspective Tilting (`TiltedCard`)**: Mathematical perspective tilt reacting to mouse position.
- **Magnetic Buttons (`MagnetButton`)**: Cursor-pulling interaction physics on primary action pills.
- **Electric Sparks (`ClickSpark`)**: Multi-directional particle sparks on click events.
- **Floating Pill Dock (`FloatingDock`)**: Windows 11 Fluent style ergonomic floating bottom bar.

---

## 🎧 Interactive Experiences

1. **Live Pomodoro Simulator**: Full circular SVG progress ring, state machine switching (Focus, Short Break, Long Break), live simulation of Windows 11 master volume ducking to 0%, and confetti celebrations.
2. **Procedural Web Audio Synthesizer Lab**: Real-time synthesized binaural 432 Hz Alpha Waves, Pink-Noise Rain, and Harmonic Bell Chimes with zero MP3 downloads or audio streaming.
3. **Architecture Explorer**: In-depth interactive technical breakdown of the 5 engineering pillars:
   - Drift-Resistant Epoch Engine (`Date.now()` timestamp deltas)
   - Native `winmm.dll` master volume ducking
   - Write-Ahead Crash Ledger (`%APPDATA%\HushLoop\silencer-session.json`)
   - Native Windows 11 Tray & Global Hotkeys (`Ctrl+Alt+F`)
   - Strict Content Security Policy zero-asset audio

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/ronaldgosso/hushloop_site.git
cd hushloop_site

# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build production bundle for GitHub Pages
npm run build
```

---

## 📦 Automated GitHub Pages Deployment

This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Pushing to `main` automatically triggers the build job on `ubuntu-latest`.
2. The compiled static artifacts from `./dist` are deployed directly to GitHub Pages.
3. Live at: **`https://ronaldgosso.github.io/hushloop_site/`**

---

## 👤 Author & Attribution

- **Author**: Ronald Gosso
- **GitHub**: [@ronaldgosso](https://github.com/ronaldgosso)
- **HushLoop Desktop App**: [github.com/ronaldgosso/hushloop](https://github.com/ronaldgosso/hushloop)

---

## 📄 License

MIT / CC0 Universal License. Created by [Ronald Gosso](https://github.com/ronaldgosso).
