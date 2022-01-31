import React from "react";

interface ComponentProps {
  children?: React.ReactChild;
}
const h1: React.FC<ComponentProps> = (p: ComponentProps) => {
  return <h1 style={{ color: "red" }}> {p.children} </h1>;
};

export const Components = {
  h1: h1,
};
export default Components;
