'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start 0.7', 'end 0.3'] });

  const words = text.split(' ');

  return (
    <p ref={container} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const color = useTransform(scrollYProgress, [start, end], ["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 100)"]);
        return (
          <motion.span key={i} style={{ color }} className="mr-1.5">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
