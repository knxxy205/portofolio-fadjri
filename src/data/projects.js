import inventoryImage from '../../assets/inventory.jpg';
import movieImage from '../../assets/movie-app.jpg';
import donationImage from '../../assets/donasi.jpg';
import billiardImage from '../../assets/biliard.jpg';

export const projects = [
  {
    id: "1",
    title: "Billizz Billiard Zone",
    description: "Aplikasi reservasi meja billiard, dibangun sebagai proyek tugas akhir. Mencakup alur booking, manajemen meja, dan dokumentasi teknis lengkap (class diagram, test case).",
    tags: ["Laravel 13", "PHP 8.3", "MySQL", "Tailwind"],
    image: billiardImage,
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: "2",
    title: "Foodcare",
    description: "Platform manajemen donasi dan distribusi makanan dengan sistem role Admin, Donatur, Relawan, dan Penerima. Pakai logika inventori FEFO (First Expired First Out) dan desain gelap \"Green Deck\".",
    tags: ["Laravel", "Filament", "FEFO Inventory"],
    image: donationImage,
    demoUrl: "",
    githubUrl: "https://github.com/knxxy205/foodcare"
  },
  {
    id: "3",
    title: "Movie App",
    description: "Aplikasi streaming/manajemen video dengan fitur listing video dan rating (top-rated berdasarkan rata-rata rating). Di-deploy pakai Docker ke home server pribadi.",
    tags: ["Laravel 10", "Docker", "MariaDB", "Nginx"],
    image: movieImage,
    demoUrl: "",
    githubUrl: "https://github.com/knxxy205/movie-laravel"
  },
  {
    id: "4",
    title: "Sistem QC & Inventori",
    description: "Proyek kelompok bootcamp, sistem monitoring quality control dan inventori. Tim gabungan Sistem Informasi & Teknik Industri.",
    tags: ["Laravel", "Group Project"],
    image: inventoryImage,
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: "5",
    title: "Warung WhatsApp Bot",
    description: "Bot WhatsApp untuk warung sayur milik ibu — mencatat transaksi dan utang secara otomatis lewat pesan WhatsApp berbahasa natural, dibangun dengan Google Apps Script dan AI (Groq/Llama).",
    tags: ["Google Apps Script", "Groq API", "Fonnte"],
    image: "",
    demoUrl: "",
    githubUrl: ""
  }
];
