/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./types.ts",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "Roboto",
          "sans-serif"
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace"
        ]
      },
      colors: {
        midnight: "#050505",
        surface: {
          100: "rgba(255, 255, 255, 0.03)",
          200: "rgba(255, 255, 255, 0.05)",
          300: "rgba(255, 255, 255, 0.08)"
        },
        primary: {
          DEFAULT: "#DC2626",
          glow: "#EF4444",
          dark: "#991B1B"
        }
      },
      animation: {
        blob: "blob 20s infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        }
      },
      backgroundImage: {
        noise: "url('https://grainy-gradients.vercel.app/noise.svg')"
      }
    }
  },
  safelist: [
    "bg-red-500/10",
    "text-red-400",
    "border-red-500/20",
    "bg-indigo-500/10",
    "text-indigo-400",
    "border-indigo-500/20",
    {
      pattern:
        /text-(orange-500|cyan-400|blue-400|emerald-400|purple-400|amber-600|pink-400|blue-500|green-400|red-400|blue-300)/,
      variants: ["group-hover"]
    }
  ],
  plugins: [require("@tailwindcss/typography")]
};
