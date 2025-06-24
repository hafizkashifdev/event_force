import RootProvidersLayout from "@layouts/root-providers-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic Creed | All-in-One Business Growth Platform",
  description:
    "Agentic Creed – a powerful platform uniting Sales, Marketing, Operations, and Services. Simplify workflows, boost productivity, and scale your business faster with ease.",
  // viewport: "initial-scale=1, width=device-width",
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
    title: "Agentic Creed | All-in-One Business Growth Platform",
    description:
      "Agentic Creed – a powerful platform uniting Sales, Marketing, Operations, and Services. Simplify workflows, boost productivity, and scale your business faster with ease.",
    url: "https://agenticcreed.ai/",
    type: "website",
    images: [
      {
        url: "https://agenticcreed.ai/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Agentic Creed | All-in-One Business Growth Platform",
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
