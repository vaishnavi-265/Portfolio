import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaishnavi K | AI Engineer",
  description:
    "Premium portfolio for Vaishnavi K, an AI Engineer specializing in Agentic AI, LLMs, RAG, SAP AI, ServiceNow, and enterprise automation.",
  keywords: [
    "Vaishnavi K",
    "AI Engineer",
    "Agentic AI",
    "LLM Engineer",
    "RAG",
    "SAP AI",
    "ServiceNow",
    "Generative AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
