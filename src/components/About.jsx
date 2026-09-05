import React from 'react';
import ScrollRevealText from './ScrollRevealText';

export default function About() {
  return (
    <section
      id="about"
      className="flex w-full h-screen items-center py-20 bg-cream"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl text-main mb-8">
          About Me
        </h2>
        <div className="font-body text-light text-lg md:text-2xl leading-relaxed space-y-6">
          <p>
            Mahasiswa Sistem Informasi semester 5 — fokus web development & serverlab, eksperimen homelab di CasaOS.
          </p>
          <ScrollRevealText text="Saya Fadjri Saputro, tertarik dengan teknologi dan pengembangan web. Suka ngulik, bikin project, dan mengubah ide jadi sesuatu yang bisa dipakai." />
          <ScrollRevealText text="Masih belajar, masih ngoding, dan masih sering berantem sama bug. Fix one bug at a time. 💀" />
        </div>
      </div>
    </section>
  );
}
