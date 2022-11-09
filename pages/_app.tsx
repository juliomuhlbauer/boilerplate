import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "app.config";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const SEO = () => {
  const router = useRouter();
  return (
    <DefaultSeo
      defaultTitle={config.name}
      titleTemplate={`%s | ${config.name}`}
      description={config.description}
      openGraph={{
        site_name: config.name,
        title: config.name,
        description: config.description,
        url: config.url + router.asPath,
        locale: config.language.replace("-", "_"),
        type: "website",
        images: [
          {
            url: config.banner,
            width: 1200,
            height: 630,
            alt: config.description,
          },
        ],
      }}
      twitter={{
        cardType: "summary_large_image",
        handle: config?.handle || undefined,
      }}
    />
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
