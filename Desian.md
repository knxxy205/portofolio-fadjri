# Portofolio Website — Design Spec

## Overview
Portofolio pribadi (single-page), UI/UX terinspirasi dari [aardvarkbookclub.com](https://www.aardvarkbookclub.com/) — playful, editorial, hangat, dengan elemen hard-shadow flat design. Dibangun ulang dari versi HTML/CSS statis ke ReactJS.

## Tech Stack
- Vite + React (JavaScript)
- Tailwind CSS (custom theme, bukan default palette)
- Vanilla custom hooks untuk animasi (tanpa library animasi eksternal seperti Framer Motion, kecuali diminta lain)

## Design Tokens

### Warna
| Token | Hex | Kegunaan |
|---|---|---|
| `bg-cream` | `#fbf9ef` | Background utama |
| `text-main` | `#1a1a1a` | Teks utama, border hard-shadow |
| `text-light` | `#4a4a4a` | Teks sekunder/deskripsi |
| `accent-coral` | `#ff7657` | Tombol, highlight |
| `accent-hover` | `#ff5a36` | Hover state tombol |
| `card-bg` | `#ffffff` | Background card |
| `tag-purple` | `#b983ff` | Tag/badge kategori |
| `tag-yellow` | `#f4d160` | Tag/badge, blob dekorasi |
| `tag-blue` | `#8bc6ec` | Tag/badge kategori |
| `tag-pink` | `#ff8fab` | Tag/badge, blob dekorasi |
| `tag-green` | `#98ddca` | Tag/badge kategori |

### Tipografi
- **Heading**: `Fraunces` (serif, weight 700 & 900) — dari Google Fonts
- **Body**: `DM Sans` (sans-serif, weight 400/500/700) — dari Google Fonts

### Signature Style
- Tombol: `rounded-full`, hard-shadow offset (`4px 4px 0px` solid, bukan blur), naik dikit + shadow membesar saat hover
- Card: border 2px solid hitam + hard-shadow sama, translate `-4px -4px` saat hover (shadow makin besar)
- Tag/badge: pill kecil, uppercase, warna solid dari palet tag di atas
- Hero: 2 blob blur dekoratif (kuning & pink) di background
- Section: heading besar (Fraunces), deskripsi singkat di bawahnya, lalu grid/card

## Struktur Folder
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── projects.js
│   └── skills.js
├── hooks/
│   ├── useScrollFade.js
│   └── useScrollPosition.js
├── assets/
├── App.jsx
└── main.jsx
```

## Struktur Halaman (urutan section)
1. **Navbar** — sticky, blur background saat scroll, logo + menu + tombol CTA
2. **Hero** — headline besar, deskripsi singkat, CTA button, blob dekorasi
3. **About** — cerita singkat
4. **Projects** — grid card (min. 4), tiap card: gambar, tag stack, judul, deskripsi, link demo/GitHub
5. **Skills** — pill list tech stack dalam wrapper berwarna
6. **Contact** — form (nama, email, pesan) + info email
7. **Footer** — copyright singkat

## Data Schema

### `projects.js`
```js
{
  id: string,
  title: string,
  description: string,
  tags: string[],        // contoh: ["Laravel", "Filament"]
  image: string,         // path/URL thumbnail
  demoUrl: string,
  githubUrl: string
}
```

### `skills.js`
```js
{
  name: string  // contoh: "Laravel", "Tailwind CSS"
}
```

## Animasi
- Fade-in saat scroll (pakai `IntersectionObserver`, dibungkus custom hook `useScrollFade`), jalan sekali per elemen
- Navbar dapat border/shadow saat `scrollY > 50` (custom hook `useScrollPosition`)

## Catatan
- Semua warna & font harus lewat Tailwind config (`theme.extend`), jangan inline style/CSS var manual di komponen
- Konten section boleh disesuaikan (nama, project, skill) — struktur & style yang wajib dipertahankan

## Libraries
- kiboui: Contribution Graph