import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FabLab - CITe",
  description: "Site desenvolvido para gerenciamento do FabLab CITe Bauru"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
