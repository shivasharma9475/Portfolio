/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#06080F",
        "void-soft": "#0B0E1A",
        nebula: {
          deep: "#1A1340",
          mid: "#3A2D6B",
          light: "#5B4B9E",
        },
        amber: {
          DEFAULT: "#F9B31C",
          dim: "#C98E14",
        },
        ion: {
          DEFAULT: "#5FE0D4",
          dim: "#3DA89E",
        },
        mist: {
          DEFAULT: "#C9CEE0",
          dim: "#7C82A0",
          faint: "#444A66",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "nebula-gradient": "radial-gradient(circle at 50% 30%, #3A2D6B 0%, #1A1340 45%, #06080F 80%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
}
