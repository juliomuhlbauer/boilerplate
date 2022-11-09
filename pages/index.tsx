import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "@/components/layout";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />

      <Layout>
        <Heading>Home</Heading>
      </Layout>
    </>
  );
};

export default Home;
