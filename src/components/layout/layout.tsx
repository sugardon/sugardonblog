import React from "react";

interface Props {
  preview?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ preview, children }: Props) => {
  return (
    <>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {preview && "preview"}
        {children}
      </div>
    </>
  );
};

export default Layout;
