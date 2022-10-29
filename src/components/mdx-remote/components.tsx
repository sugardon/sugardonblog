import Link from "next/link";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LinkIcon } from "../icon";
import { Mermaid } from "./mermaid";

const getAnchor = (text: string): string => {
  const encoded = encodeURI(text);
  return encoded;
};
const AnchorLinkIcon = ({ anchor }: { anchor: string }) => {
  return (
    <a href={`#${anchor}`}>
      <div className="mt-2 ml-1 hidden group-hover:block">
        <LinkIcon />
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
            <div>{children}</div>
          </Link>
        </h1>
        <AnchorLinkIcon anchor={anchor} />
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
            <div>{children}</div>
          </Link>
        </h2>
        <AnchorLinkIcon anchor={anchor} />
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
  const language = match ? match[1] : undefined;
  const str: string = p.children ? p.children.toString() : "";

  switch (language) {
    case "mermaid":
      return <Mermaid>{str}</Mermaid>;
    case undefined:
      return <SyntaxHighlighter style={atomOneDark}>{str}</SyntaxHighlighter>;
    default:
      return (
        <SyntaxHighlighter language={language} style={atomOneDark}>
          {str}
        </SyntaxHighlighter>
      );
  }
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
