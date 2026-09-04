/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#fbf9ef',
        'main': '#1a1a1a',
        'light': '#4a4a4a',
        'accent-coral': '#ff7657',
        'accent-hover': '#ff5a36',
        'card-bg': '#ffffff',
        'tag-purple': '#b983ff',
        'tag-yellow': '#f4d160',
        'tag-blue': '#8bc6ec',
        'tag-pink': '#ff8fab',
        'tag-green': '#98ddca',
      },
      fontFamily: {
        'heading': ['Fraunces', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}