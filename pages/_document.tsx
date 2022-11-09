import { config } from "app.config";
import { theme } from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

const { name, description, icons, language } = config;

const DocumentMeta = () => {
  return (
    <>
      <meta name="application-name" content={name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={name} />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="theme-color" content={config.themeColor} />
      <link
        rel="apple-touch-icon"
        sizes={icons.web.sizes}
        href={icons.web.src}
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href={icons.web.src} />
    </>
  );
};

export default function Document() {
  return (
    <Html lang={language}>
      <Head>
        <DocumentMeta />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
