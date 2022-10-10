import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { GetAllPosts, GetPost } from "../../../../../utils/post";
import { Post } from "../../../../../types/post";
import { Layout, Main } from "../../../../../components/layout";
import { PostTitle } from "../../../../../components/post";
import Components from "../../../../../components/mdx-remote";
import Container from "../../../../../containers/Container";
import Nav from "../../../../../components/header";

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await GetAllPosts();

  const paths = allPosts.map((p) => {
    const id = {
      params: {
        year: p.postMeta.path.year,
        month: p.postMeta.path.month,
        day: p.postMeta.path.day,
        name: p.postMeta.path.name,
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
      postMeta: post.postMeta,
      source: post.source,
    },
  };
};

export const Name: React.FC<Post> = ({ postMeta, source }: Post) => {
  return (
    <Layout>
      <Nav />
      <Main>
        <Container>
          <div className="xl:px-20">
            <PostTitle>{postMeta.title}</PostTitle>
          </div>
          <div className="space-y-5 text-xl xl:px-20">
            <MDXRemote {...source} components={Components} />
          </div>
        </Container>
      </Main>
    </Layout>
  );
};
export default Name;
