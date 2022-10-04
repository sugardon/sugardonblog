import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostPath {
  year: string;
  month: string;
  day: string;
  name: string;
}

export interface PostMeta {
  path: PostPath;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  all: { [key: string]: string };
}

export interface Post {
  path: string;
  postMeta: PostMeta;
  source: MDXRemoteSerializeResult;
}
