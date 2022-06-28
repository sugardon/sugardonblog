import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  all: { [key: string]: string };
}

export interface Post {
  path: string;
  postMeta: PostMeta;
  source: MDXRemoteSerializeResult;
}
