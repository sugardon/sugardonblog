import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface ComponentProps {
  children?: React.ReactChild;
}
const h1: React.FC<ComponentProps> = (p: ComponentProps) => {
  return <h1 className="text-3xl font-bold underline"> {p.children} </h1>;
};

interface CodeProps {
  children: React.ReactChild;
  className: string;
}
// https://mdxjs.com/guides/syntax-highlighting/#syntax-highlighting-at-run-time
const code: React.FC<CodeProps> = (p: CodeProps) => {
  const match = /language-(\w+)/.exec(p.className || "");

  return match ? (
    <SyntaxHighlighter language={match[1]} style={atomOneDark}>
      {p.children}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter style={atomOneDark}>{p.children}</SyntaxHighlighter>
  );
};

export const Components = {
  h1: h1,
  code: code,
};
export default Components;
