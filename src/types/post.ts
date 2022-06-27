import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostMeta {
  title: string;
  description: string;
  all: { [key: string]: string };
}

export interface Post {
  name: string;
  postMeta: PostMeta;
  source: MDXRemoteSerializeResult;
}
