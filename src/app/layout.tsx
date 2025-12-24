import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MomenIndah | Event Organizer Jakarta | Jasa EO Corporate Event",
  description: "MomenIndah Event Organizer - Ciptakan Momen yang Tak Terlupakan. Event organizer profesional untuk corporate event, launching product, gathering, exhibition, dan acara spesial lainnya di Jakarta.",
  keywords: "event organizer jakarta, EO jakarta, jasa event organizer, corporate event, product launching, team building, gala dinner, exhibition",
  openGraph: {
    title: "MomenIndah Event Organizer",
    description: "Ciptakan Momen yang Tak Terlupakan bersama MomenIndah Event Organizer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FAF5FF] text-[#1E1B4B]">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
