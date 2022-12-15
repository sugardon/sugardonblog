import mermaid from "mermaid";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

// https://github.com/vercel/next.js/discussions/12837
export const Mermaid: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const elmRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "default",
    });
    const elm = elmRef.current;
    if (!elm) return;
    elm.innerHTML =
      typeof children === "string"
        ? [`<div class="mermaid">`, children, `</div>`].join("")
        : "";
    mermaid.init(".mermaid");
  }, [children]);

  return (
    <div>
      <div ref={elmRef} />
    </div>
  );
};
