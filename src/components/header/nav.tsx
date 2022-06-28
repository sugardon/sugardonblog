import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="sticky top-0 w-full bg-gray-50">
      <div className="container mx-auto items-center justify-between px-5 py-4 md:py-6">
        <Link href="/">
          <a className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl">
            sugardon blog
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
