import { extendTheme } from "@chakra-ui/react";
import { theme as base, ThemeConfig } from "@chakra-ui/theme";
import { globalStyles } from "./styles/global-styles";

import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const fonts = {
  heading: `${inter.style.fontFamily}, ${base.fonts.heading}`,
  body: `${inter.style.fontFamily}, ${base.fonts.body}`,
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const primary = base.colors.whiteAlpha;

const colors = {
  primary,
};

export const theme = extendTheme({
  config,
  fonts,
  semanticTokens: {
    colors: {
      accent: primary[300],
      bg: { _light: "white", _dark: "gray.800" },
      text: { _light: "gray.800", _dark: "whiteAlpha.900" },
    },
  },
  styles: globalStyles,
  colors,
});
