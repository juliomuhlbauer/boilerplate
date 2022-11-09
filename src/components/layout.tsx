import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container as="main" maxW="container.lg" py={8}>
      {children}
    </Container>
  );
};
