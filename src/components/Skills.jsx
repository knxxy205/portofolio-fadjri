import React from 'react';
import { skills } from '../data/skills';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Skills() {
  const [ref, isVisible] = useScrollFade();

  return (
    <section id="skills" className="py-24 bg-cream">
      <div 
        ref={ref}
        className={`container mx-auto px-6 md:px-12 max-w-4xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="bg-tag-purple border-2 border-main rounded-3xl p-10 md:p-16 hard-shadow text-center">
          <h2 className="font-heading text-4xl text-main mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="bg-card-bg border-2 border-main text-main font-body font-bold px-6 py-3 rounded-full text-lg shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[4px_4px_0px_#1a1a1a] hover:-translate-y-1 hover:-translate-x-1 transition-all"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
