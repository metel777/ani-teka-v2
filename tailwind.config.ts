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
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
      },
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
      backgroundImage: {
       'neu-btn': 'linear-gradient(rgba(255, 255, 255, .08), rgba(255, 255, 255, 0));'
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
        "glance-authkit": "inset 0 1px 1px 0 rgba(255, 237, 223, 0.2), inset 0 24px 48px 0 rgba(245, 212, 168, 0.06), inset 0 0 0 1px rgba(247, 221, 186, 0.12)",
        "smooth-taobao": "0 6px 48px 0 rgba(0, 17, 51, .06)",
        "tw-shadow": " 0 10px 32px rgba(34,42,53,.15), 0 1px 1px rgba(0,0,0,.05), 0 4px 6px rgba(34,42,53,.08), 0 1px 1px rgba(34,42,53,.1), 0 24px 68px rgba(47,48,55,.1)",
        "neu-shadow": "inset 0 1px rgba(255, 255, 255, .12), 0 1px 2px rgba(16, 24, 40, .16)"
      },
      /* on lighter bg color -700, on darker(starts from 400) -white  */

      colors: {
        'text': {
          "primary-light": "#44403c",
          "primary-dark": "#d7d3d0",
          "secondary-light": "#79716b",
          "secondary-dark": "#79716b",
          "tertiary-light": "#d7d3d0",
          "tertiary-dark": "#44403c",
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