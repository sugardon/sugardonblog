import React from "react";
import Head from "next/head";
import Nav from "../../components/header";
import { Layout, Main, Container } from "../../components/layout";
import { GitHubIcon, TwitterIcon } from "../../components/icon";

export const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>about - sugardonblog</title>
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
              sugardon - Spend a fluffy time.
            </p>
            {/* Link */}
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">
              Link
            </h2>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <GitHubIcon />
                <a href="https://github.com/sugardon">
                  <span className="hover:text-indigo-700">
                    {"https://github.com/sugardon"}
                  </span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <TwitterIcon />
                <a href="https://twitter.com/_sugardon">
                  <span className="hover:text-indigo-700">
                    {"https://twitter.com/_sugardon"}
                  </span>
                </a>
              </li>
            </ul>
            {/* Experience */}
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">
              Experience
            </h2>
            <p className="mb-6 sm:text-lg md:mb-8">Engineering experience.</p>
            <ul className="mb-6 list-inside list-disc sm:text-lg md:mb-8">
              <li>
                <b>Programing Language:</b> TypeScript, Go, Scala, Python
              </li>
              <li>
                <b>Infrastructure:</b> Kubernets, IaC(AWS CDK, Pulumi), CI/CD
                (GitHub Actions, ArgoCD, Jenkins, Tekton), VMware vSphere
              </li>
              <li>
                <b>Frontend:</b> React, Next.js, Playwright
              </li>
            </ul>
            {/* Develop */}
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">
              Develop
            </h2>
            <ul className="mb-6 list-inside list-disc sm:text-lg md:mb-8">
              <li>
                <a href="https://github.com/sugardon/sugardonblog/">
                  <span className="hover:text-indigo-700">
                    sugardonblog - Next.js based blog
                  </span>
                </a>
              </li>
              <li>
                <a href="https://github.com/sugardon/helm-charts/">
                  <span className="hover:text-indigo-700">helm charts</span>
                </a>
              </li>
            </ul>
            {/* Interest */}
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">
              Interest
            </h2>
            <ul className="mb-6 list-inside list-disc sm:text-lg md:mb-8">
              <li>
                <b>Cloud Native:</b> microservice, service mesh
              </li>
              <li>
                <b>Security:</b> software supply chain security
              </li>
            </ul>
            {/* end content */}
          </div>
        </Container>
      </Main>
    </Layout>
  );
};
export default Index;
