import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block ${
        disabled
          ? ''
          : 'bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-cyan-400 to-neutral-200 bg-[length:200%_100%]'
      } ${className}`}
      style={{
        animation: disabled ? 'none' : `sweepShiny ${animationDuration} linear infinite`,
      }}
    >
      {text}
    </span>
  );
};
