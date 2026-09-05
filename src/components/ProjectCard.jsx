import React from 'react';

// Fungsi bantuan untuk menentukan warna tag (badge)
const getTagColor = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('laravel') || t.includes('php')) return 'bg-tag-red text-main'; // Kita pakai coral/red buat Laravel
  if (t.includes('tailwind') || t.includes('css')) return 'bg-tag-blue text-main';
  if (t.includes('js') || t.includes('javascript') || t.includes('script')) return 'bg-tag-yellow text-main';
  if (t.includes('mysql') || t.includes('mariadb')) return 'bg-tag-purple text-main';
  if (t.includes('docker')) return 'bg-tag-blue text-main';
  return 'bg-tag-green text-main'; // Default
};

export default function ProjectCard({ project }) {
  return (
    <div className="bg-card-bg border-2 border-main rounded-2xl overflow-hidden hard-shadow hard-shadow-hover transition-all duration-300 flex flex-col h-full group">
      
      {/* Thumbnail (pakai div warna solid kalau blm ada gambar, nanti ganti src img) */}
      <div className="h-40 md:h-48 w-full border-b-2 border-main bg-cream relative overflow-hidden group-hover:opacity-90 transition-opacity">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-heading text-light text-2xl opacity-50">
            {project.title.substring(0, 2)}
          </div>
        )}
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[11px] md:text-xs font-bold px-2.5 md:px-3 py-0.5 md:py-1 rounded-full uppercase border-2 border-main ${
                tag.toLowerCase().includes('laravel') ? 'bg-accent-coral text-white' : 
                tag.toLowerCase().includes('tailwind') ? 'bg-tag-blue' :
                tag.toLowerCase().includes('mysql') || tag.toLowerCase().includes('mariadb') ? 'bg-tag-purple' :
                tag.toLowerCase().includes('script') || tag.toLowerCase().includes('groq') ? 'bg-tag-yellow' :
                'bg-tag-green'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Info */}
        <h3 className="font-heading text-xl md:text-2xl font-bold text-main mb-2 md:mb-3">{project.title}</h3>
        <p className="font-body text-light text-sm md:text-base flex-grow mb-4 md:mb-6">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.demoUrl && project.demoUrl !== "-" && project.demoUrl !== "—" && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-bold font-body bg-main text-card-bg py-2 px-4 rounded-full hover:bg-accent-coral transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "-" && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-bold font-body bg-cream border-2 border-main py-2 px-4 rounded-full hover:bg-tag-yellow transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
