# Portfolio — Fadjri Saputro

Personal portfolio website dibangun dengan React + Vite + Tailwind CSS, dengan gaya visual playful & editorial yang terinspirasi dari [Aardvark Book Club](https://www.aardvarkbookclub.com/) — hard-shadow flat design, warna cream & coral, tipografi bold, dan beberapa animasi interaktif.

🔗 **Live demo**: *(isi link setelah deploy)*

## ✨ Fitur

- Desain flat dengan signature **hard-shadow** (border solid + shadow offset khas, bukan blur biasa)
- **Infinite marquee** untuk tech stack yang scroll otomatis
- **Parallax floating elements** di background yang bergerak mengikuti scroll
- **Scroll-linked text reveal** — teks di section About menyala kata per kata mengikuti posisi scroll (terinspirasi [text-opacity-scroll](https://github.com/olivierlarose/text-opacity-scroll))
- Fully responsive, dari mobile sampai desktop
- Section: Hero, About, Projects, Skills, Contact

## 🛠 Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS (custom theme — warna & font disesuaikan dari design system sendiri)
- **Animasi**: Framer Motion
- **Font**: Fraunces (heading) & DM Sans (body)

## 📁 Struktur Project

```
src/
├── components/    # Semua komponen UI (Navbar, Hero, Projects, dst)
├── data/          # Data project & skill (projects.js, skills.js)
├── hooks/         # Custom hooks (scroll fade, scroll position, dll)
└── assets/        # Gambar & aset statis
```

## 🚀 Menjalankan Secara Lokal

```bash
# Clone repo
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## 📬 Kontak

Punya ide project, tawaran kerja, atau cuma mau say hi? Hubungi saya lewat section Contact di website, atau langsung via email/GitHub yang tertera di sana.

---

Dibangun dengan ☕ dan sedikit perdebatan sama bug.
