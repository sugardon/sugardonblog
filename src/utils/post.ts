import * as fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { Post, PostMeta } from "../types/post";

const toPostMeta = (frontMatter: { [key: string]: string }) => {
  const postMeta: PostMeta = {
    title: frontMatter.title || "",
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
  // TODO: get all path
  const paths: string[] = ["posts/test.mdx"];

  const posts: Post[] = await Promise.all(paths.map((p) => GetPost(p)));
  return posts;
};
