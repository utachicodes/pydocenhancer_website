import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PyDocEnhancer - Python Documentation Made Simple",
  description:
    "Automatically parse your Python code and generate beautiful, comprehensive documentation. No configuration needed.",
  keywords: ["Python", "Documentation", "API", "Generator", "Sphinx", "MkDocs"],
  authors: [{ name: "Abdoullah Ndao" }],
  creator: "Abdoullah Ndao",
  publisher: "PyDocEnhancer",
  openGraph: {
    title: "PyDocEnhancer - Python Documentation Made Simple",
    description: "Automatically parse your Python code and generate beautiful, comprehensive documentation.",
    url: "https://pydocenhancer.vercel.app",
    siteName: "PyDocEnhancer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PyDocEnhancer - Python Documentation Made Simple",
    description: "Automatically parse your Python code and generate beautiful, comprehensive documentation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
