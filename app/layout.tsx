import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biblioteca - Gerenciador de Livros",
  description: "Gerencie sua biblioteca pessoal de forma simples e eficiente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
