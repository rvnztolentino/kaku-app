/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '4xl': '1876px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#0a0a0a",
        gray: "#6b7280",
        'dark-gray': "#374151",
        'light-gray': "#9ca3af",
        'light-gray-2': "#e5e5e5",
      },
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      'noto-sans': ['Noto Sans', 'sans-serif'],
      'playfair-display': ['Playfair Display', 'sans-serif'],
    },
  },
  plugins: [],
};
