import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "../containers/Container";
import Header from "../components/head-nav";
import Layout from "../containers/Layout";
import { PostList } from "../components/post";

export const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>sugardonblog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <div>Index page</div>
        <Link href={`/posts/test`}>test</Link>
        <PostList />
      </Container>
    </Layout>
  );
};
export default Index;
