import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-5xl font-bold leading-tight tracking-tighter text-center md:text-7xl lg:text-8xl md:leading-none md:text-left">
      {children}
    </h1>
  );
};

export default Title;
