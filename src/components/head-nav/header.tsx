import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <Link href="/">
        <a className="hover:underline">sugardon blog</a>
      </Link>
    </h2>
  );
};

export default Header;
