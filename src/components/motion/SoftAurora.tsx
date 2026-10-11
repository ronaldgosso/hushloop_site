import React from 'react';

export const SoftAurora: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Top cyan atmospheric orb */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[650px] h-[450px] rounded-full blur-[140px] opacity-25 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, #00f2fe 0%, #0077b6 50%, transparent 75%)',
        }}
      />
      {/* Subtle secondary teal orb */}
      <div
        className="absolute top-[35%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #4eedde 0%, #036666 60%, transparent 80%)',
        }}
      />
      {/* Warm coral highlight orb for break contrast */}
      <div
        className="absolute top-[60%] -right-[10%] w-[550px] h-[450px] rounded-full blur-[170px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #ff4b72 0%, #9b2226 60%, transparent 80%)',
        }}
      />
    </div>
  );
};
