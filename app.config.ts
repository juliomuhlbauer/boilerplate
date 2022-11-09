interface Asset {
  src: `/${string}`;
  sizes: `${number}x${number}`;
  type: `image/${string}`;
}

interface Config {
  name: string;
  description: string;
  language: `${string}-${string}`;
  banner: `/${string}`;
  url: string;
  icons: {
    web: Asset;
    app: Asset;
  };
  themeColor: `#${string}`;
  backgroundColor: `#${string}`;
  screenshots: Asset[];
  handle?: string;
}

export const config: Config = {
  name: "Pilot Starter kit",
  description: "A starter kit for creating Nextjs apps with Chakra UI",
  language: "pt-BR",
  banner: "/banner.png",
  url: "",
  icons: {
    web: {
      src: "/logo-2.png",
      sizes: "512x512",
      type: "image/png",
    },
    app: {
      src: "/logo.png",
      sizes: "512x512",
      type: "image/png",
    },
  },
  themeColor: "#000000",
  backgroundColor: "#ffffff",
  screenshots: [],
};
