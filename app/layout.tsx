import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Gravitas_One } from "next/font/google" // Add this

import "./globals.css"
import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/Navbar"
import TopNav from "@/components/TopNav"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const gravitasOne = Gravitas_One({
  variable: "--font-gravitas-one",
  subsets: ["latin"],
  weight: "400",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Four Seasons | Ervaren Kapper en Beauty Specialist in Groningen",
  description: "Four Seasons Kapper Groningen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${gravitasOne.variable} antialiased`}
      >
        <CartProvider>
          <TopNav />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
