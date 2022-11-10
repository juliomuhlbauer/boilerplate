import { SystemStyleObject } from "@chakra-ui/react";

export const scrollbar: SystemStyleObject = {
  "@media (pointer: fine)": {
    "::-webkit-scrollbar": {
      w: "5px",
      h: "5px ",
    },
    "::-webkit-scrollbar-thumb": {
      rounded: "5px",
      bgColor: "primary.600",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bgColor: "primary.400",
    },
    "::-webkit-scrollbar-corner": {
      bg: "transparent",
    },
  },
};
