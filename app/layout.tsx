import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ParticleBackground } from "@/components/ParticleBackground";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kenndavis.com"),
  title: "Kenn Davis | Socio-Technical Architect & HCD Specialist",
  description: "Bridging technical complexity and human need through Systems Thinking, Spatial Computing, and Adaptive AI.",
  keywords: ["Socio-Technical Architect", "Human-Centered Design", "AR/VR", "IoT", "AI Pedagogy", "Smart Cities"],
  authors: [{ name: "Kenn Davis" }],
  openGraph: {
    title: "Kenn Davis | Socio-Technical Architect",
    description: "Bridging technical complexity and human need.",
    url: "https://kenndavis.com",
    siteName: "Kenn Davis Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenn Davis | Socio-Technical Architect",
    description: "Bridging technical complexity and human need.",
    creator: "@kenndavis",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4BW0HWR4RF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4BW0HWR4RF');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollToTop />
        <ParticleBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

