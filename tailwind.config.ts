import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  daisyui: {
    themes: ["emerald", "forest", "garden"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;
