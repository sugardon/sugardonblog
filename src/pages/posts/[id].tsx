import fs from "fs";
import path from "path";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import Components from "../../components/mdx-remote";
import Header from "../../components/head-nav";
import Layout from "../../containers/Layout";
import Container from "../../containers/Container";
import Title from "../../containers/Posts";
import { Post } from "../../types/post";
import {GetPost} from "../../utils/post";

const POSTS_PATH = path.join(process.cwd(), "posts");

const postsDirents = fs
  .readdirSync(POSTS_PATH, { withFileTypes: true })
  .filter((dirent) => dirent.isFile() && /\.mdx?$/.test(dirent.name));
const postsPaths = postsDirents.map((d) => d.name);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsPaths.map((path) => {
    const id = {
      params: {
        id: path.replace(/\.mdx?$/, ""),
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
  const postFilePath = "posts/test.mdx";
  const post = await GetPost(postFilePath);

  return {
    props: {
      name: post.name,
      postMeta: post.postMeta,
      source: post.source,
    },
  };
};

export const TestPost: React.FC<Post> = ({ postMeta, source }: Post) => {
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
export default TestPost;
