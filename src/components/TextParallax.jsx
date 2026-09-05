import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const phrases = [
  { text: 'Build. Break. Fix.', direction: -1, offset: '-8%' },
  { text: 'Frontend meets Backend', direction: 1, offset: '-24%' },
  { text: 'Code one bug at a time.', direction: -1, offset: '-12%' },
];

function TextRow({ text, direction, offset, progress }) {
  const x = useTransform(progress, [0, 1], [120 * direction, -120 * direction]);

  return (
    <motion.div
      style={{ x, left: offset }}
      className="relative flex w-max whitespace-nowrap items-center parallax-row"
    >
      {[0, 1, 2].map((copy) => (
        <span
          key={copy}
          className="px-5 font-heading text-[clamp(2.5rem,8vw,8rem)] font-black leading-none text-main"
        >
          {text}
          <span className="mx-5 text-accent-coral">✦</span>
        </span>
      ))}
    </motion.div>
  );
}

export default function TextParallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      aria-label="Creative developer statement"
      className="mt-4 overflow-hidden border-y-2 border-main bg-cream py-16 md:mt-6 md:py-20"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        {phrases.map((phrase) => (
          <TextRow key={phrase.text} {...phrase} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
