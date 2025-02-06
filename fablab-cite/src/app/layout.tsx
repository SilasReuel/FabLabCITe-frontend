import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
// import Header from "@/components/header";

export const metadata: Metadata = {
  title: "FabLab - CITe",
  description: "Site desenvolvido para gerenciamento do FabLab CITe Bauru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Theme appearance="dark">
          {/* <Header /> */}
          {children}
        </Theme>
      </body>
    </html>
  );
}
