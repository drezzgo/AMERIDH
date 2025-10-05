/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontSize: {
      'hero': 'clamp(2rem, 5vw, 4rem)',
      },
      spacing: {
        'safe': 'env(safe-area-inset-top)', // para dispositivos con notch
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
