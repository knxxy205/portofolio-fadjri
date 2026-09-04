import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function RevealWord({ word, index, totalWords, progress }) {
  const progressPerWord = 0.7 / Math.max(totalWords - 1, 1);
  const start = 0.02 + index * progressPerWord;
  const end = Math.min(start + 0.04, 0.90);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const color = useTransform(progress, [start, end], ['#4a4a4a', '#1a1a1a']);

  return (
    <motion.span style={{ opacity, color }} className="scroll-reveal-word">
      {word}
    </motion.span>
  );
}

export default function ScrollRevealText({ text }) {
  const containerRef = useRef(null);
  const words = text.trim().split(/\s+/);
  const totalWords = words.length;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Mulai saat paragraf masuk dari bawah viewport,
    // selesai penuh pas paragraf sampai di tengah viewport.
    offset: ['start end', 'center center'],
  });

  return (
    <p ref={containerRef} className="scroll-reveal-text">
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <RevealWord
            word={word}
            index={index}
            totalWords={totalWords}
            progress={scrollYProgress}
          />
          {index < totalWords - 1 ? ' ' : null}
        </span>
      ))}
    </p>
  );
}