import Link from "next/link";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const getAnchor = (text: string): string => {
  const encoded = encodeURI(text);
  return encoded;
};
// https://github.com/hashicorp/next-mdx-remote/issues/251
const h1 = ({ children }: { children?: React.ReactNode }) => {
  const anchor = typeof children === "string" ? getAnchor(children) : "";
  return (
    <div className="space-y-3">
      <h1 className="mt-2 text-5xl font-bold" id={anchor}>
        <Link href={`#${anchor}`}>
          <a>{children}</a>
        </Link>
      </h1>
      <hr className="border-y-1 dark:border-slate-700" />
    </div>
  );
};
const h2 = ({ children }: { children?: React.ReactNode }) => {
  const anchor = typeof children === "string" ? getAnchor(children) : "";
  return (
    <div className="space-y-3">
      <h1 className="mt-2 text-3xl font-bold" id={anchor}>
        <Link href={`#${anchor}`}>
          <a>{children}</a>
        </Link>
      </h1>
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
