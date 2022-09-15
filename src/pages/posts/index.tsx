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
  const { draft } = router.query;
  const showDraft =
    typeof draft === "string" && ["True", "true"].includes(draft);

  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <Nav />

      <Main>
        <Container>
          <PostList posts={props.allPosts} showDraft={showDraft} />
        </Container>
      </Main>
    </Layout>
  );
};
export default Index;
