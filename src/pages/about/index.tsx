import React from "react";
import Head from "next/head";
import Nav from "../../components/header";
import { Layout, Main, Container } from "../../components/layout";

export const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Nav />

      <Main>
        <Container>
          <div className="mx-auto px-4 xl:px-48">
            {/* content */}
            <h1 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6">
              About
            </h1>
            <p className="mb-6 text-center sm:text-lg md:mb-8">
              sugardon - software engineer
            </p>

            <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">
              Link
            </h2>
            <ul className="mb-6 list-inside list-disc sm:text-lg md:mb-8">
              <li>This is a section of link, like sns.</li>
            </ul>

            <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">
              Experience
            </h2>
            <p className="mb-6 sm:text-lg md:mb-8">
              This is a section of experience.
            </p>
            <ul className="mb-6 list-inside list-disc sm:text-lg md:mb-8">
              <li>Cloud Native</li>
              <li>Frontend</li>
            </ul>

            <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">
              Interest
            </h2>
            <ul className="mb-6 list-inside list-disc sm:text-lg md:mb-8">
              <li>Cloud Native</li>
              <li>Frontend</li>
            </ul>
            {/* end content */}
          </div>
        </Container>
      </Main>
    </Layout>
  );
};
export default Index;
