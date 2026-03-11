import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#060816",
        card: "rgba(255,255,255,0.08)",
        neon: "#6EE7FF",
        purple: "#9b5cff"
      },
      backgroundImage: {
        aurora: "radial-gradient(circle at 20% 20%, rgba(91, 76, 255, 0.35), transparent 55%), radial-gradient(circle at 80% 30%, rgba(16, 185, 129, 0.25), transparent 45%), radial-gradient(circle at 40% 80%, rgba(110, 231, 255, 0.28), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
