import type React from "react"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
})

export const metadata = {
  title: "Abhijit Arote - Portfolio",
  description: "Software Engineer | Web Dev | Data Analysis"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${jetbrainsMono.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
