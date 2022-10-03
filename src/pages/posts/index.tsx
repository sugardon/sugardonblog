import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Post } from "../../types/post";
import { GetAllPosts } from "../../utils/post";
import { Layout, Main } from "../../components/layout";
import Nav from "../../components/header";
import Container from "../../containers/Container";
import { PostList } from "../../components/post";
import { GetOptions } from "../../utils/post-page";

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
  const router = useRouter();
  const options = GetOptions(router.query);

  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <Nav />

      <Main>
        <Container>
          <PostList posts={props.allPosts} options={options} />
        </Container>
      </Main>
    </Layout>
  );
};
export default Index;
