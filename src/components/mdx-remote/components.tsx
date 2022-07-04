import Link from "next/link";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const getAnchor = (text: string): string => {
  const encoded = encodeURI(text);
  return encoded;
};
const LinkIcon = ({ anchor }: { anchor: string }) => {
  return (
    <a href={`#${anchor}`}>
      <div className="mt-2 ml-1 hidden group-hover:block">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </div>
    </a>
  );
};
// https://github.com/hashicorp/next-mdx-remote/issues/251
const h1 = ({ children }: { children?: React.ReactNode }) => {
  const anchor = typeof children === "string" ? getAnchor(children) : "";
  return (
    <div className="space-y-3">
      <div className="group flex items-center">
        <h1 className="mt-2 text-5xl font-bold" id={anchor}>
          <Link href={`#${anchor}`}>
            <a>{children}</a>
          </Link>
        </h1>
        <LinkIcon anchor={anchor} />
      </div>
      <hr className="border-y-1 dark:border-slate-700" />
    </div>
  );
};
const h2 = ({ children }: { children?: React.ReactNode }) => {
  const anchor = typeof children === "string" ? getAnchor(children) : "";
  return (
    <div className="space-y-3">
      <div className="group flex items-center">
        <h2 className="mt-2 text-3xl font-bold" id={anchor}>
          <Link href={`#${anchor}`}>
            <a>{children}</a>
          </Link>
        </h2>
        <LinkIcon anchor={anchor} />
      </div>
      <hr className="border-y-1 dark:border-slate-700" />
    </div>
  );
};
const a = ({ href, ...props }: JSX.IntrinsicElements["a"]) => {
  return <a className="text-blue-500 hover:underline" href={href} {...props} />;
};

const ul = (props: JSX.IntrinsicElements["ul"]) => {
  return <ul className="list-inside list-disc" {...props} />;
};

const li = ({ children }: JSX.IntrinsicElements["li"]) => {
  return <li>{children}</li>;
};

interface CodeProps {
  children?: React.ReactNode;
  className?: string | undefined;
}
// https://mdxjs.com/guides/syntax-highlighting/#syntax-highlighting-at-run-time
const code = (p: CodeProps) => {
  const match = /language-(\w+)/.exec(p.className || "");
  const str: string = p.children ? p.children.toString() : "";

  return match ? (
    <SyntaxHighlighter language={match[1]} style={atomOneDark}>
      {str}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter style={atomOneDark}>{str}</SyntaxHighlighter>
  );
};

// https://mdxjs.com/table-of-components/
export const Components: import("mdx/types").MDXComponents = {
  h1,
  h2,
  a,
  ul,
  li,
  code,
};
export default Components;
