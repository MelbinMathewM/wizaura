import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/contact-buttons";
import ClientWrapper from "@/components/client-wrapper";

export const metadata: Metadata = {
  title: "Wizaura",
  description: "Web & App Developers",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
