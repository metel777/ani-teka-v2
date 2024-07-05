import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      spacing: {
        "btn.xs": "8px 14px 8px 14px",
        "btn.sm": "10px 16px 10px 16px",
        "btn.md": "10px 18px 10px 18px",
        "btn.lg": "12px 20px 12px 20px",
        "btn.xl": "16px 24px 16px 24px",
      },
      boxShadow: {
        xxs: "0 1px 2px rgba(16, 24, 40, 0.16)",
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1);",
        lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
        glance: "inset 0 1px rgba(255, 255, 255, 0.4)",
        "glance-authkit": "inset 0 1px 1px 0 rgba(255, 237, 223, 0.2), inset 0 24px 48px 0 rgba(245, 212, 168, 0.06), inset 0 0 0 1px rgba(247, 221, 186, 0.12)"
      },
      /* on lighter bg color -700, on darker(starts from 400) -white  */

      colors: {
        "brand": '',
        "text-strong": '',
        "text-weak": '',
        "stroke-strong": '',
        "stroke-weak": '',
        "fill": '',
        "foreground": '',
        "background": '',
        'text': {
          "primary-light": "#44403c",
          "primary-dark": "#d7d3d0",
          "secondary-light": "#79716b",
          "secondary-dark": "#79716b",
          "tertiary-light": "#d7d3d0",
          "tertiary-dark": "#44403c",
          // "text": "#color",
          // "text": "#color",
          // "text": "#color",
        },
        "bg": {
          "primary-light": "white",
          "primary-dark": "#171412",
          "secondary-light": "#e7e5e4",
          "secondary-dark": "#292524",
          "tertiary-light": "#f2f4f7",
          "tertiary-dark": "#1c1917"
        },
        "b": {
          "primary-light": "#color",
          "primary-dark": "#44403c",
          "secondary-light": "#color",
          "secondary-dark": "#color",
          "tertiary-light": "#color",
          "tertiary-dark": "#color"
        },
        "brand": {
          "primary": "#9e77ed",
          "secondary-light": "#color",
          "secondary-dark": "#color",
          "tertiary-light": "#color",
          "tertiary-dark": "#color"
        },
        "header": {
          "bg": "#292524",
          "primary-dark": "#color",
          "secondary-light": "#color",
          "secondary-dark": "#color",
          "tertiary-light": "#color",
          "tertiary-dark": "#color"
        },
        
        "g.warm": {
          25: "#fdfdfc",
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d7d3d0",
          400: "#a8a29d",
          500: "#79716b",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#171412",
        },
        "g.light": {
          25: "#fcfcfd",
          50: "#f9fafb",
          100: "#f2f4f7",
          200: "#eaecf0",
          300: "#d0d5dd",
          400: "#98a2b3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#182230",
          900: "#101828",
          950: "#0c111d",
        },
        "g.dark": {
          25: "#fafafa",
          50: "#f5f5f6",
          100: "#f0f1f1",
          200: "#ececed",
          300: "#cecfd2",
          400: "#94969c",
          500: "#85888e",
          600: "#61646c",
          700: "#333741",
          800: "#1f242f",
          900: "#161b26",
          950: "#0c111d",
        },
        "g.blue": {
          25: "#fcfcfd",
          50: "#f8f9fc",
          100: "#eaecf5",
          200: "#d5d9eb",
          300: "#b3b8db",
          400: "#717bbc",
          500: "#4e5ba6",
          600: "#3e4784",
          700: "#363f72",
          800: "#293056",
          900: "#101323",
          950: "#0d0f1c",
        },
        "g.cool": {
          25: "#fcfcfd",
          50: "#f9f9fb",
          100: "#eff1f5",
          200: "#dcdfea",
          300: "#b9c0d4",
          400: "#7d89af",
          500: "#5d6b98",
          600: "#4a5578",
          700: "#404968",
          800: "#30374f",
          900: "#111322",
          950: "#0e101b",
        },
        "g.modern": {
          25: "#fcfcfd",
          50: "#f8fafc",
          100: "#eef2f6",
          200: "#e3e8ef",
          300: "#cdd5df",
          400: "#9aa3b2",
          500: "#697586",
          600: "#4b5565",
          700: "#364152",
          800: "#202939",
          900: "#121926",
          950: "#0d121c",
        },
        "g.neutral": {
          25: "#fcfcfd",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d2d6db",
          400: "#9da4ae",
          500: "#6c737f",
          600: "#4d5761",
          700: "#384250",
          800: "#1f2a37",
          900: "#111927",
          950: "#0d121c",
        },
        "g.iron": {
          25: "#fcfcfc",
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d1d1d6",
          400: "#a0a0ab",
          500: "#70707b",
          600: "#51525c",
          700: "#3f3f46",
          800: "#26272b",
          900: "#1a1a1e",
          950: "#131316",
        },
        "g.true": {
          25: "#fcfcfc",
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d6d6d6",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#424242",
          800: "#292929",
          900: "#141414",
          950: "#0f0f0f",
        },
       

        moss: {
          25: "#fafdf7",
          50: "#f5fbee",
          100: "#e6f4d7",
          200: "#ceeab0",
          300: "#acdb79",
          400: "#86cb3c",
          500: "#669f2a",
          600: "#4f7a21",
          700: "#3f621a",
          800: "#335015",
          900: "#2b4212",
          950: "#1a280b",
        },
        // "g.warm": {
        //   25: "#fdfdfc",
        //   50: "#fafaf9",
        //   100: "#f5f5f4",
        //   200: "#e7e5e4",
        //   300: "#d7d3d0",
        //   400: "#a8a29d",
        //   500: "#79716b",
        //   600: "#57534e",
        //   700: "#44403c",
        //   800: "#292524",
        //   900: "#1c1917",
        //   950: "#171412",
        // },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1c1917",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config