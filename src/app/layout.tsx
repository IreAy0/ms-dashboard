import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from "next/font/local";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MS-dashboard Assessement',
  description: 'mainstack dashboard assessment',
}

const Degular = LocalFont({
	src: "../../public/fonts/Degular-Regular.otf",
	variable: "--font-degular",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
