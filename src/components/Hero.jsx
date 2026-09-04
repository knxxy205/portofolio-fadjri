import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useScrollFade } from '../hooks/useScrollFade';

gsap.registerPlugin(SplitText);

export default function Hero() {
  const [ref, isVisible] = useScrollFade();
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (!headingRef.current) return undefined;

    const split = SplitText.create(headingRef.current, {
      type: 'lines, words',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      aria: 'auto',
    });
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = [descriptionRef.current, buttonRef.current].filter(Boolean);
    const introTimeline = gsap.timeline({ paused: true });

    if (!reduceMotion) {
      gsap.set([split.lines, ...targets], { autoAlpha: 0 });
      gsap.set(split.lines, { yPercent: 110 });
      gsap.set(targets, { y: 20 });
      introTimeline
        .to(split.lines, { yPercent: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' })
        .to(descriptionRef.current, { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power2.out' }, '-=0.42')
        .to(buttonRef.current, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'back.out(1.4)' }, '-=0.3');
    }

    const start = () => {
      if (reduceMotion) return;
      introTimeline.play();
    };
    window.addEventListener('introComplete', start, { once: true });
    if (!document.querySelector('.intro-loader')) start();

    return () => {
      window.removeEventListener('introComplete', start);
      introTimeline.kill();
      split.revert();
    };
  }, []);

  return (
    <section 
      id="hero"
      ref={ref}
      className={`relative w-full h-screen flex items-center justify-center bg-cream overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Blob Dekoratif */}
      <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-tag-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0"></div>
      <div className="absolute top-40 right-10 w-64 h-64 md:w-96 md:h-96 bg-tag-pink rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0"></div>

      {/* Konten Teks */}
      <div className="hero-content relative z-10 text-center px-6 pt-24">
        <h1 ref={headingRef} className="font-heading text-5xl md:text-7xl text-main mb-6 leading-tight">
          Bikin website yang nggak cuma jalan,<br/>tapi juga asik dilihat.
        </h1>
        <p ref={descriptionRef} className="font-body text-light text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Mahasiswa Sistem Informasi & web developer yang suka membangun aplikasi dari sisi backend sampai UI-nya kena.
        </p>
        
        {/* Tombol */}
        <a ref={buttonRef}
          href="#projects"
          className="inline-block bg-accent-coral text-card-bg font-body font-bold text-lg py-4 px-10 rounded-full border-2 border-main hard-shadow hard-shadow-hover transition-transform"
        >
          Lihat Karya Saya
        </a>
      </div>
    </section>
  );
}
