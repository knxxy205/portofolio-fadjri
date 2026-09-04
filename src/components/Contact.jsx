import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@fajrisptro',
    href: 'https://www.instagram.com/fajrisptro',
    className: 'contact-social-instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    handle: 'knxxy205',
    href: 'https://github.com/knxxy205',
    className: 'contact-social-github',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.29-5.14 5.57.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'fadjrisaputro205@gmail.com',
    href: 'mailto:fadjrisaputro205@gmail.com',
    className: 'contact-social-email',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3.5 6 8.5 7 8.5-7" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollFade();

  return (
    <section id="contact" className="py-24 bg-card-bg">
      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 max-w-5xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-accent-coral font-bold uppercase tracking-[0.2em] text-sm mb-3">Get in touch</p>
            <h2 className="font-heading text-4xl md:text-5xl text-main mb-6">Mari Ngobrol</h2>
            <p className="font-body text-light text-lg mb-8">
              Punya ide project, tawaran kerja, atau cuma mau say hi? Silakan isi form atau kontak saya langsung via email dan sosmed.
            </p>

            <div className="contact-social-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className={`contact-social-card ${social.className}`}
                  aria-label={`${social.label}: ${social.handle}`}
                >
                  <span className="contact-social-icon">{social.icon}</span>
                  <span className="contact-social-copy">
                    <strong>{social.label}</strong>
                    <small>{social.handle}</small>
                  </span>
                  <span className="contact-social-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <form className="bg-cream border-2 border-main rounded-3xl p-8 hard-shadow flex flex-col gap-6">
            <div>
              <label className="block font-heading font-bold text-main mb-2">Nama</label>
              <input type="text" placeholder="Nama kamu..." className="w-full font-body p-4 bg-card-bg border-2 border-main rounded-2xl outline-none focus:ring-4 focus:ring-accent-coral/20" />
            </div>
            <div>
              <label className="block font-heading font-bold text-main mb-2">Email</label>
              <input type="email" placeholder="Email kamu..." className="w-full font-body p-4 bg-card-bg border-2 border-main rounded-2xl outline-none focus:ring-4 focus:ring-accent-coral/20" />
            </div>
            <div>
              <label className="block font-heading font-bold text-main mb-2">Pesan</label>
              <textarea rows="4" placeholder="Tulis pesanmu di sini..." className="w-full font-body p-4 bg-card-bg border-2 border-main rounded-2xl outline-none focus:ring-4 focus:ring-accent-coral/20 resize-none"></textarea>
            </div>
            <button type="button" className="bg-accent-coral text-card-bg font-body font-bold text-lg py-4 px-8 rounded-full border-2 border-main hard-shadow hard-shadow-hover transition-transform mt-2">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
