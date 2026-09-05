import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Projects() {
  const [ref, isVisible] = useScrollFade();

  // Ambil 4 project terbaik sesuai note di content.md
  const topProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="relative pt-20 md:pt-24 pb-24 bg-card-bg border-t-2 border-main">
      <div 
        ref={ref}
        className={`container mx-auto px-6 md:px-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-main mb-4">Projects</h2>
          <p className="font-body text-light text-base md:text-lg">Beberapa karya yang pernah saya buat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
          {topProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-cream border-2 border-main font-body font-bold text-main text-sm md:text-base py-2.5 md:py-3 px-6 md:px-8 rounded-full hard-shadow hard-shadow-hover transition-all">
            Lihat Semua Project
          </button>
        </div>
      </div>
    </section>
  );
}
