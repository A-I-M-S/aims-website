import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-WK45QC02XS";

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
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
