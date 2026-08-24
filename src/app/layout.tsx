import type { Metadata, Viewport } from "next";
import { RegisterServiceWorker } from "@/components/RegisterServiceWorker";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hfixlab.vercel.app"),
  title: {
    default: "HFix Lab | Assistencia tecnica com coleta e rastreio",
    template: "%s | HFix Lab",
  },
  description:
    "HFix Lab busca, diagnostica, repara, testa e entrega dispositivos eletronicos com ordem de servico rastreavel.",
  applicationName: "HFix Lab",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "HFix Lab",
    description: "Tecnologia reparada com precisao. Buscamos, reparamos e entregamos.",
    url: "https://hfixlab.vercel.app",
    siteName: "HFix Lab",
    locale: "pt_BR",
    type: "website",
    images: ["/images/hfix-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0867F2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <RegisterServiceWorker />
        {children}
      </body>
    </html>
  );
}
