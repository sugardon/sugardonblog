import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { GetAllPosts, GetPost } from "../../../../../utils/post";
import { Post } from "../../../../../types/post";
import Layout from "../../../../../containers/Layout";
import Header from "../../../../../components/head-nav/header";
import Title from "../../../../../containers/Posts/Title";
import Components from "../../../../../components/mdx-remote";
import Container from "../../../../../containers/Container";

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await GetAllPosts();
  const allPaths = allPosts.map((p) => p.path);

  const paths = allPaths.map((path) => {
    const p = path.split("/");
    const id = {
      params: {
        year: p.slice(-4)[0],
        month: p.slice(-3)[0],
        day: p.slice(-2)[0],
        name: p.slice(-1)[0],
      },
    };
    return id;
  });
  return {
    paths,
    fallback: false,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath =
    params &&
    `posts/${params.year}/${params.month}/${params.day}/${params.name}.mdx`;
  // TODO: Check undefined
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await GetPost(postFilePath!);

  return {
    props: {
      name: post.path,
      postMeta: post.postMeta,
      source: post.source,
    },
  };
};

export const Name: React.FC<Post> = ({ postMeta, source }: Post) => {
  return (
    <Layout>
      <Container>
        <Header />
        <Title>{postMeta.title}</Title>
        <div>
          <MDXRemote {...source} components={Components} />
        </div>
      </Container>
    </Layout>
  );
};
export default Name;
