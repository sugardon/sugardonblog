import mermaid from "mermaid";
import React, { useEffect } from "react";

// https://github.com/vercel/next.js/discussions/12837
export const Mermaid: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydrated) {
    mermaid.initialize({
      startOnLoad: false,
    });
    mermaid.init(".mermaid");
  }

  // TODO: fix hydration error
  return <div className="mermaid">{children}</div>;
};
