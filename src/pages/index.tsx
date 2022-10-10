import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Nav from "../components/header";
import { Layout, Main, Container } from "../components/layout";
import { PostList } from "../containers/posts";
import { GetAllPostMeta } from "../utils/post";
import { PostMeta } from "../types/post";
import Hero from "../components/hero";

interface indexProps {
  allPostMeta: PostMeta[];
}
export const getStaticProps: GetStaticProps = async () => {
  const pms = await GetAllPostMeta();
  return {
    props: {
      allPostMeta: pms,
    },
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Index: React.FC<indexProps> = (props: indexProps) => {
  return (
    <Layout>
      <Head>
        <title>sugardonblog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Main>
        <Container>
          <Hero />
        </Container>
        <Container>
          <PostList
            postMeta={props.allPostMeta}
            options={{ showDraft: false, pageSize: 5, pageNumber: 1 }}
          />
        </Container>
      </Main>
    </Layout>
  );
};
export default Index;
