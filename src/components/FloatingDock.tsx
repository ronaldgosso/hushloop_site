import React, { useState } from 'react';
import { Play, Volume2, Cpu, Download, User } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const FloatingDock: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('demo');

  const navItems = [
    { id: 'demo', label: 'Timer', href: '#demo', icon: <Play className="w-4 h-4" /> },
    { id: 'soundscapes', label: 'Sound', href: '#soundscapes', icon: <Volume2 className="w-4 h-4" /> },
    { id: 'architecture', label: 'Architecture', href: '#architecture', icon: <Cpu className="w-4 h-4" /> },
    { id: 'creator', label: 'Creator', href: '#creator', icon: <User className="w-4 h-4" /> },
    { id: 'download', label: 'Download', href: '#download', icon: <Download className="w-4 h-4 text-cyan-400" /> },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-fit pointer-events-auto">
      <nav className="glass-dock px-3 py-2 flex items-center gap-1.5 shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveItem(item.id)}
            className={`group relative flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 no-underline ${
              activeItem === item.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>

            {/* Hover tooltip for small screens */}
            <span className="sm:hidden absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </span>
          </a>
        ))}

        <div className="h-4 w-px bg-white/10 mx-1" />

        <a
          href="https://github.com/ronaldgosso/hushloop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </nav>
    </div>
  );
};
