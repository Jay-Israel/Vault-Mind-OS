import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VaultMind | Autonomous Treasury OS",
  description: "VaultMind is an AI-powered autonomous treasury operating system for Web3 organizations.",
  metadataBase: new URL("https://vaultmind.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-vault-bg text-vault-text selection:bg-vault-blue selection:text-slate-100">
        {children}
      </body>
    </html>
  );
}
