/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#06B6D4',
        'brand-cyan': '#14B8A6',
        'brand-dark': '#0891B2',
        'trust-blue': '#1E40AF',
        'fire-red': '#DC2626',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
