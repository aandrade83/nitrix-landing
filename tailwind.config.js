/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        char: "#0c0c10",
        steel: "#1a1a1f",
        silver: "#c8c8cc",
        crimson: "#e10a1e",
        ember: "#ff2b3d",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Neue Haas Grotesk"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.32em',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(22px)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
        scrollDot: 'scrollDot 2.2s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
