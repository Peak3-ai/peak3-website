import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google" // Import Inter font from next/font

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"], // Specify weights if not using variable font
})

export const metadata: Metadata = {
  title: "Peak3 - AI automations",
  description:
    "Turn busywork into autonomous growth. Peak3 designs AI agents & automations that slash costs and give you back your time.",
  openGraph: {
    title: "Peak3 - AI & Automation Studio",
    description:
      "Turn busywork into autonomous growth. Peak3 designs AI agents & automations that slash costs and give you back your time.",
    images: [
      {
        url: "images/logo.png", // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Peak3 AI & Automation Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="5bS/6l2AMpj5S8CP8p3zMw" async></script>
        {/* The <link> for Google Fonts is handled by next/font/google, no need for manual <link> tag */}
        {/* Plausible Analytics Script Placeholder */}
        {/* <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script> */}
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%cAUTOMATE', 'font-size: 50px; color: #00c16a; font-weight: bold; text-shadow: 2px 2px #0B1E40;');
              console.log('%cPsst... use coupon code PEAKLAUNCH for 10% off your first project!', 'font-size: 16px; color: #FFB383;');
            `,
          }}
        />
      </body>
    </html>
  )
}
