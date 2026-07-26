import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muammarhannan.github.io"),

  title: {
    default: "Mu'Ammar Hannan Najib",
    template: "%s | Mu'Ammar Hannan Najib",
  },

 description:
  "Official portfolio of Mu'ammar Hannan Najib, a Bachelor's graduate in Information Technology specializing in IT Support, Network Engineering, System Administration, and IT Infrastructure.",

keywords: [
  "Mu'ammar Hannan Najib",
  "IT Support",
  "Network Engineer",
  "System Administrator",
  "IT Infrastructure",
  "Network Infrastructure",
  "Cisco",
  "MikroTik",
  "Windows Server",
  "Active Directory",
  "Computer Networking",
  "Technical Support",
  "Fresh Graduate",
  "Information Technology",
  "Portfolio",
],

authors: [
  {
    name: "Mu'ammar Hannan Najib",
    url: "https://github.com/Muammarhannan",
  },
],

creator: "Mu'ammar Hannan Najib",
publisher: "Mu'ammar Hannan Najib",

openGraph: {
  title: "Mu'ammar Hannan Najib | IT Support & Network Engineer",

  description:
    "Fresh Graduate in Information Technology specializing in IT Support, Network Engineering, System Administration, and IT Infrastructure.",

  url: "https://muammarhannan.github.io",

  siteName: "Mu'ammar Hannan Najib",

  locale: "en_US",

  type: "website",

  images: [
    {
      url: "/portfolio/og-image.png",
      width: 1200,
      height: 630,
      alt: "Mu'ammar Hannan Najib Portfolio",
    },
  ],
},

  twitter: {
    card: "summary_large_image",

    title: "Mu'Ammar Hannan Najib",

    description:
      "IT Support • Network Engineer • System Administrator",

    images: ["/portfolio/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#09090b",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`bg-background ${inter.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}