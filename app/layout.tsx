import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIMS — A.I. Management Services",
  description:
    "AIMS helps businesses, entrepreneurs, professionals, and individuals discover, manage, and implement practical AI solutions with confidence.",
  openGraph: {
    title: "AIMS — A.I. Management Services",
    description: "Helping Businesses and Individuals Use AI With Confidence.",
    images: ["/aims-logo-cropped.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
