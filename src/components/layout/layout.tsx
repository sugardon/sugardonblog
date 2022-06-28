import React from "react";

interface Props {
  preview?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ preview, children }: Props) => {
  return (
    <>
      <div className="min-h-screen">
        {preview && "preview"}
        {children}
      </div>
    </>
  );
};

export default Layout;
