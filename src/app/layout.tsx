import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Zustand Counter + Auth App',
  description: 'A beautiful, responsive app with Zustand, Sanity, and Next.js. Includes login, signup, forgot password, and counter functionality.',
  keywords: ['Zustand', 'Next.js', 'Sanity', 'Authentication', 'TailwindCSS', 'Counter'],
  authors: [{ name: 'Riaz Hussain Saifi', url: 'https://github.com/Riaz-Hussain-Saifi' }],
  creator: 'Riaz Hussain Saifi',
  metadataBase: new URL('https://zustand-counter-git-main-riaz-hussains-saifi.vercel.app/'), // replace with your domain
  openGraph: {
    title: 'Zustand Counter + Auth App',
    description: 'Modern auth & counter app with Zustand, Sanity & TailwindCSS.',
    url: 'https://yourdomain.com', // replace
    siteName: 'Zustand Counter App',
    images: [
      {
        url: 'https://github.com/Riaz-Hussain-Saifi/Zustand-Counter/blob/931488464376b09c779b68fc117acbc1a40ee2b4/src/app/favicon.ico', 
        width: 1200,
        height: 630,
        alt: 'Zustand Counter App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
