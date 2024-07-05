import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/themeProvider"
import Header from "@/components/Header/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AniTeka v4",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto bg-g.light-50 text-text-primary-light antialiased  dark:bg-g.warm-900 dark:text-text-secondary-dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="logo_mark"></div>
          <Header />
          <div className="mx-auto mt-5 max-w-[1100px] overflow-hidden rounded-sm bg-bg-primary-light dark:bg-g.warm-950">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
