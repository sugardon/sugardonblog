import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PostMeta } from "../../types/post";
import { GetAllPostMeta } from "../../utils/post";
import { Layout, Main, Container } from "../../components/layout";
import Nav from "../../components/header";
import { OptionView, PostList } from "../../containers/posts";
import { GetOptions } from "../../utils/post-page";

interface indexProps {
  allPostMeta: PostMeta[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostMeta = await GetAllPostMeta();
  return {
    props: {
      allPostMeta,
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
        <title>articles - sugardonblog</title>
      </Head>
      <Nav />

      <Main>
        <Container>
          <OptionView options={options} />
          <PostList postMeta={props.allPostMeta} options={options} />
        </Container>
      </Main>
    </Layout>
  );
};
export default Index;
