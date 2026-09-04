import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const greetings = ['Hello', 'Bonjour', 'Ciao', 'Olá', 'やあ', 'Hallå', 'Guten Tag', 'Halo'];

export default function IntroLoader() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const delay = index === 0 ? 850 : 140;
      const timer = window.setTimeout(() => setIndex((current) => current + 1), delay);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setIsDone(true);
      window.dispatchEvent(new Event('introComplete'));
    }, 550);
    return () => window.clearTimeout(timer);
  }, [index]);

  const { width, height } = size;
  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 280} 0 ${height} L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height} L0 0`;

  return (
    <motion.div
      aria-hidden="true"
      className="intro-loader"
      initial={{ top: 0 }}
      animate={{ top: isDone ? '-100vh' : 0 }}
      transition={{ duration: 0.8, delay: isDone ? 0.2 : 0, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (isDone) document.querySelector('.intro-loader')?.remove();
      }}
    >
      {width > 0 && (
        <>
          <motion.p
            className="intro-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.86 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="intro-dot" />
            {greetings[index]}
          </motion.p>
          <svg className="intro-curve" viewBox={`0 0 ${width} ${height + 280}`} preserveAspectRatio="none">
            <motion.path
              d={initialPath}
              animate={{ d: isDone ? targetPath : initialPath }}
              transition={{ duration: 0.7, delay: isDone ? 0.3 : 0, ease: [0.76, 0, 0.24, 1] }}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
