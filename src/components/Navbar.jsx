import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md border-b-2 border-main hard-shadow py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-heading text-3xl font-black text-main">FS.</a>

          <div className="hidden md:flex gap-8 font-body font-bold text-main">
            {links.slice(0, 3).map(([label, href]) => (
              <a key={href} href={href} className="hover:text-accent-coral transition-colors">{label}</a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-block bg-accent-coral text-card-bg font-body font-bold py-2 px-6 rounded-full hard-shadow hard-shadow-hover transition-transform"
          >
            Hubungi Saya
          </a>

          <button
            type="button"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="mobile-menu-button"
          >
            <span className={isOpen ? 'menu-line menu-line-top is-open' : 'menu-line menu-line-top'} />
            <span className={isOpen ? 'menu-line menu-line-bottom is-open' : 'menu-line menu-line-bottom'} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Tutup menu"
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />
            <motion.aside
              className="mobile-menu-panel"
              initial={{ clipPath: 'circle(0% at 100% 0%)' }}
              animate={{ clipPath: 'circle(150% at 100% 0%)' }}
              exit={{ clipPath: 'circle(0% at 100% 0%)' }}
              transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="mobile-menu-inner">
                <p className="mobile-menu-kicker">Navigate</p>
                <div className="mobile-menu-links">
                  {links.map(([label, href], index) => (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      initial={{ y: 28, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.12 + index * 0.07, duration: 0.45 }}
                    >
                      <span>0{index + 1}</span>{label}
                    </motion.a>
                  ))}
                </div>
                <p className="mobile-menu-footer">Fadjri Saputro — Designer & Developer</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
