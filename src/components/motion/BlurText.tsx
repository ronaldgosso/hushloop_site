import React, { useEffect, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  className = '',
  animateBy = 'words',
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span className={`inline-flex flex-wrap items-center gap-x-[0.25em] ${className}`}>
      {elements.map((el, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${i * delay}ms`,
            opacity: mounted ? 1 : 0,
            filter: mounted ? 'blur(0px)' : 'blur(10px)',
            transform: mounted ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
          }}
        >
          {el === ' ' ? '\u00A0' : el}
        </span>
      ))}
    </span>
  );
};
