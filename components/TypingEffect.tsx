import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, className, showCursor = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  const isComplete = index >= text.length;

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isComplete && <span className="blinking-cursor">_</span>}
    </span>
  );
};

export default TypingEffect;