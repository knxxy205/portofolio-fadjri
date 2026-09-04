import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-main text-cream py-10">
      <div className="container mx-auto px-6 md:px-12 text-center font-body text-sm md:text-base opacity-80">
        <p className="mb-2">© 2026 Fadjri Saputro. Dibangun dengan Laravel... eh React 😄</p>
        <p>Dikoding pake kopi, debugging pake doa, deploy pake nekat 💀</p>
        <p className="mt-4 text-xs opacity-60">Kalau ada bug, itu fitur. Kalau lancar, berarti lagi hoki.</p>
      </div>
    </footer>
  );
}
