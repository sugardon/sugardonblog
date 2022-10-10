import React from "react";

interface Props {
  children?: React.ReactNode;
}

// https://tailwindcss.com/docs/container
const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="container mx-auto px-5 py-24">{children}</div>;
};

export default Container;
