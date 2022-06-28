import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../containers/Container";
import Nav from "../components/header";
import { Layout, Main } from "../components/layout";
import { PostList } from "../components/post";
import { GetAllPosts } from "../utils/post";
import { Post } from "../types/post";
import Hero from "../components/hero/hero";

interface indexProps {
  allPosts: Post[];
}
export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await GetAllPosts();
  return {
    props: {
      allPosts,
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
          <PostList posts={props.allPosts} />
        </Container>
      </Main>
    </Layout>
  );
};
export default Index;
