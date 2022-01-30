import fs from "fs";
import path from "path";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

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
  const source = fs.readFileSync(postFilePath);

  // https://github.com/hashicorp/next-mdx-remote#frontmatter--custom-processing
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

// style
interface h1Props {
  children?: React.ReactChild;
}
const h1: React.FC<h1Props> = (p: h1Props) => {
  return <h1 style={{ color: "red" }}> {p.children} </h1>;
};
const components = {
  h1: (p: h1Props) => h1(p),
};

// Render post
interface TestProps {
  frontMatter: { [key: string]: string };
  source: MDXRemoteSerializeResult;
}
export const TestPost: React.FC<TestProps> = ({
  frontMatter,
  source,
}: TestProps) => {
  return (
    <div>
      <h1> {frontMatter.title} </h1>
      <MDXRemote {...source} components={components} />
    </div>
  );
};
export default TestPost;
