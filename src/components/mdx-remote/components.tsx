import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// https://github.com/hashicorp/next-mdx-remote/issues/251
const h1 = ({ children }: { children?: React.ReactNode }) => {
  return <h1 className="text-3xl font-bold underline"> {children} </h1>;
};

interface CodeProps {
  children?: React.ReactNode;
  className?: string | undefined;
}
// https://mdxjs.com/guides/syntax-highlighting/#syntax-highlighting-at-run-time
const code = (p: CodeProps) => {
  const match = /language-(\w+)/.exec(p.className || "");
  const str: string = p.children ? p.children.toString() : ""

  return match ? (
    <SyntaxHighlighter language={match[1]} style={atomOneDark}>
      {str}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter style={atomOneDark}>{str}</SyntaxHighlighter>
  );
};

export const Components: import("mdx/types").MDXComponents = {
  h1: h1,
  code: code,
};
export default Components;
