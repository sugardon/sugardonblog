import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none">
      {children}
    </h1>
  );
};

export default Title;
