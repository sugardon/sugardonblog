import * as fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Post, PostMeta, PostPath } from "../types/post";
import { getMDXPathsRecursively } from "./file";

const toPostPath = (path: string): PostPath => {
  const p = path.split("/");
  const name = p.slice(-1)[0];
  return {
    year: p.slice(-4)[0],
    month: p.slice(-3)[0],
    day: p.slice(-2)[0],
    name: name.split(".")[0],
    // type: name.split(".")[1],
  };
};
const getTag = (frontMatter: { [key: string]: string }): string[] => {
  if (typeof frontMatter.tag === "object") {
    return Object.values(frontMatter.tag);
  } else {
    return [];
  }
};

const toPostMeta = (frontMatter: { [key: string]: string }, path: string) => {
  const postMeta: PostMeta = {
    path: toPostPath(path),
    title: frontMatter.title || "No Title",
    description: frontMatter.description || "No Description",
    date: frontMatter.date || "1900-01-01",
    draft: ["True", "true"].includes(frontMatter.draft),
    tag: getTag(frontMatter),
    // all: frontMatter,
  };
  return postMeta;
};

export const GetPostMeta = async (path: string) => {
  const source = fs.readFileSync(path);

  const { data } = matter(source);
  return toPostMeta(data, path);
};

export const GetPost = async (path: string) => {
  const source = fs.readFileSync(path);

  // https://github.com/hashicorp/next-mdx-remote#frontmatter--custom-processing
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  const post: Post = {
    postMeta: toPostMeta(data, path),
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

export const GetAllPostMeta = async () => {
  const paths: string[] = getMDXPathsRecursively(
    path.join(process.cwd(), "posts"),
    []
  );
  const pms: PostMeta[] = await Promise.all(paths.map((p) => GetPostMeta(p)));
  return pms;
};
