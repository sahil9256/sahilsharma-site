import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilsharmaqa.com"),
  title: "Sahil Sharma — Automation QA Lead",
  description:
    "Automation QA Lead specializing in Playwright & Cypress, CI/CD quality strategy, API testing, performance testing, and security validation.",
  openGraph: {
    title: "Sahil Sharma — Automation QA Lead",
    description:
      "Playwright • Cypress • CI/CD • API • Performance • Security validation. Portfolio + thoughts on quality engineering.",
    url: "https://sahilsharmaqa.com",
    siteName: "Sahil Sharma",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Sharma — Automation QA Lead",
    description:
      "Portfolio + thoughts on QA automation, CI/CD reliability, and AI-assisted testing.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
