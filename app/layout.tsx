import RootProvidersLayout from "@layouts/root-providers-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Force | Precision Transport for Unforgettable Events",
  description:
    "Event Force– Deliver seamless, high-quality transport and logistics for events across Saudi Arabia, with a focus on professionalism, precision, and customer satisfaction",
  
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "icon",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "Event Force | Precision Transport for Unforgettable Events",
    description:
      "Event Force– Deliver seamless, high-quality transport and logistics for events across Saudi Arabia, with a focus on professionalism, precision, and customer satisfaction.",
    url: "https://eventforce.com/",
    type: "website",
    images: [
      {
        url: "https://eventforce.com/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Event Force | Precision Transport for Unforgettable Events",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}`}>
        <RootProvidersLayout>{children}</RootProvidersLayout>
      </body>
    </html>
  );
}
