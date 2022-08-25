import React from "react";
import Link from "next/link";
import { DarkSwitcher } from "../../containers/switcher";

const Nav = () => {
  // https://flowbite.com/docs/components/navbar/
  return (
    <nav className="sticky top-0 w-full bg-gray-50 shadow-sm dark:bg-gray-900">
      <div className="max-w-8xl container mx-auto flex items-center justify-between px-5 py-4 md:py-6">
        {/* logo */}
        <div className="flex-none md:order-1">
          <Link href="/">
            <a className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl">
              sugardon blog
            </a>
          </Link>
        </div>
        {/* dark switcher */}
        <div className="flex md:order-2">
          <DarkSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
