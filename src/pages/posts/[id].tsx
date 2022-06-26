import fs from "fs";
import path from "path";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Components from "../../components/mdx-remote";
import Header from "../../components/head-nav";
import Layout from "../../containers/Layout";
import Container from "../../containers/Container";
import Title from "../../containers/Posts";
import { Post, PostMeta } from "../../types/post";

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

const toPostMeta = (frontMatter: { [key: string]: string }) => {
  const postMeta: PostMeta = {
    title: frontMatter.title || "",
    all: frontMatter,
  };
  return postMeta;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = "posts/test.mdx";
  const source = fs.readFileSync(postFilePath);

  // https://github.com/hashicorp/next-mdx-remote#frontmatter--custom-processing
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      name: postFilePath.replace(/\.mdx?$/, ""),
      postMeta: toPostMeta(data),
      source: mdxSource,
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
