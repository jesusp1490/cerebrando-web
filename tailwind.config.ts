import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta ligada a variables CSS (RGB) con soporte de /<alpha>
        "brand-primary": "rgb(var(--brand-primary) / <alpha-value>)",
        "brand-accent":  "rgb(var(--brand-accent) / <alpha-value>)",
        "neutral-light": "rgb(var(--neutral-light) / <alpha-value>)",
        "neutral-dark":  "rgb(var(--neutral-dark) / <alpha-value>)",

        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "card": "rgb(var(--card) / <alpha-value>)",
        "card-foreground": "rgb(var(--card-foreground) / <alpha-value>)",
        popover: "rgb(var(--popover) / <alpha-value>)",
        "popover-foreground": "rgb(var(--popover-foreground) / <alpha-value>)",

        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "rgb(var(--secondary-foreground) / <alpha-value>)",

        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",

        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",

        destructive: "rgb(var(--destructive) / <alpha-value>)",
        "destructive-foreground": "rgb(var(--destructive-foreground) / <alpha-value>)",

        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        // next/font puede inyectar --font-outfit y --font-playfair
        sans: ["var(--font-outfit)", "Outfit", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "Playfair Display", "ui-serif", "Georgia"],
      },
      boxShadow: {
        lift: "0 10px 25px rgb(0 0 0 / 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
