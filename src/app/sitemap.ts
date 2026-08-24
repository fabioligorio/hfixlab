import type { MetadataRoute } from "next";

const routes = [
  "",
  "/servicos",
  "/como-funciona",
  "/solicitar-reparo",
  "/acompanhar",
  "/garantia",
  "/faq",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hfixlab.vercel.app";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-08-24"),
  }));
}

