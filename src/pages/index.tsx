import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Container from "../containers/Container";
import Header from "../components/head-nav";
import Layout from "../containers/Layout";
import { PostList } from "../components/post";
import { GetAllPosts } from "../utils/post";
import { Post } from "../types/post";

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

      <Container>
        <Header />
        <div>
          <h1>Index page</h1>
        </div>
        <PostList posts={props.allPosts} />
      </Container>
    </Layout>
  );
};
export default Index;
