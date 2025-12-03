import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cursed Web Decoding",
  description: "Proof of concept for decoding byte-perfect frames from H264/MP4 videos in the browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
