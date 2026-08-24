import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HFix Lab",
    short_name: "HFix",
    description: "Assistencia tecnica com coleta, reparo, rastreio e garantia.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090D",
    theme_color: "#0867F2",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

