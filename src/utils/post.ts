import * as fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Post, PostMeta } from "../types/post";
import { getMDXPathsRecursively } from "./file";

const toPostMeta = (frontMatter: { [key: string]: string }) => {
  const postMeta: PostMeta = {
    title: frontMatter.title || "No Title",
    description: frontMatter.description || "No Description",
    all: frontMatter,
  };
  return postMeta;
};

export const GetPost = async (path: string) => {
  const source = fs.readFileSync(path);

  // https://github.com/hashicorp/next-mdx-remote#frontmatter--custom-processing
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  const post: Post = {
    name: path.replace(/\.mdx?$/, ""),
    postMeta: toPostMeta(data),
    source: mdxSource,
  };
  return post;
};

export const GetAllPosts = async () => {
  const paths: string[] = getMDXPathsRecursively(
    path.join(process.cwd(), "posts"),
    []
  );
  const posts: Post[] = await Promise.all(paths.map((p) => GetPost(p)));
  return posts;
};
