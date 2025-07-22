import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serene Marble & Tile | Surrey, BC | Expert Tile & Marble Installers",
  description:
    "Serene Marble & Tile is a professional tile and marble installation company based in Surrey, BC. We offer premium flooring, kitchen backsplash, bathroom tile, and custom marble services throughout the Lower Mainland.",
  keywords: [
    "Marble and Tile Surrey",
    "Tile Installation Surrey BC",
    "Marble Flooring",
    "Kitchen Backsplash Tile",
    "Bathroom Tile Installer",
    "Surrey Tile Contractor",
    "Serene Marble & Tile",
    "Custom Tile Work BC",
    "Tile and Stone Installation",
    "Luxury Tile Work Surrey",
  ],
  metadataBase: new URL("https://serenetile.ca"),
  icons: {
    icon: "/serene-logo.png", // favicon image (place in /public)
    shortcut: "/serene-logo.png",
    apple: "/serene-logo.png",
  },
  openGraph: {
    title: "Serene Marble & Tile | Trusted Tile Experts in Surrey, BC",
    description:
      "Transform your space with Serene Marble & Tile — Surrey's trusted experts in marble and tile installation. Residential and commercial projects welcome.",
    url: "https://serenetile.ca",
    siteName: "Serene Marble & Tile",
    images: [
      {
        url: "/serene-logo.png",
        width: 512,
        height: 512,
        alt: "Serene Marble & Tile Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Serene Marble & Tile | Tile & Marble Services in Surrey, BC",
    description:
      "Quality marble and tile installation services in Surrey and the Lower Mainland. Trusted craftsmanship. Free estimates available.",
    images: ["/serene-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
