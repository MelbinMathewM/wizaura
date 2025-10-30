import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/contact-buttons";
import ClientWrapper from "@/components/client-wrapper";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wizaura - Web & App Developers",
  description: "Wizaura crafts modern web and mobile applications that empower businesses. Full-stack development, UI/UX design, and more.",
  keywords: [
    "web development",
    "app development",
    "full-stack",
    "UI/UX design",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "digital solutions",
    "software development",
  ],
  authors: [{ name: "Melbin Mathew", url: "https://melbinmathew.vercel.app" }],
  creator: "Wizaura",
  publisher: "Wizaura",
  metadataBase: new URL("https://wizaura.co"),
  applicationName: "Wizaura",
  colorScheme: "dark light",
  themeColor: "#14B8A6",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Wizaura - Web & App Developers",
    description: "Crafting modern web and mobile applications that empower businesses.",
    url: "https://wizaura.co",
    siteName: "Wizaura",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wizaura - Web & App Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wizaura - Web & App Developers",
    description: "Crafting modern web and mobile applications that empower businesses.",
    site: "@wizaura",
    creator: "@melbinmathew",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans bg-white dark:bg-black antialiased`}>
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </ClientWrapper>
      </body>
    </html>
  );
}
