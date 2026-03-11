import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SubSense AI",
  description: "Smart Subscription Manager"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
