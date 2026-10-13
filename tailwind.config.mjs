/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        hato: {
          green: '#1D3124',
          'green-dark': '#132218',
          'green-light': '#2a4433',
          sand: '#C2AD91',
          'sand-light': '#E9E2D8',
          'sand-dark': '#A69074',
          cream: '#FAF8F5',
          surface: '#F2EDE4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};