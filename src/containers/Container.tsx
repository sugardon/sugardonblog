import React from "react";

interface Props {
  children?: React.ReactNode;
}

// https://tailwindcss.com/docs/container
const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="container px-5 mx-auto">{children}</div>;
};

export default Container;
