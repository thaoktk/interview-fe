/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E293B',
        'secondary': '#0F172A',
        "green": "#15803D",
        "red": "#B91C1C",
        "yellow": "#FACC15",
        "gray": "#374151",
      },
    }
  },
  plugins: [],
}
