import React, { useState } from "react";
import Link from "next/link";
import { DarkSwitcher } from "../../containers/switcher";
import { MenuIcon, XIcon } from "../icon";

const HamburgerIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="flex items-center px-3 py-2" onClick={onClick}>
      <MenuIcon />
    </button>
  );
};

const CrossIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="flex items-center px-3 py-2" onClick={onClick}>
      <XIcon />
    </button>
  );
};

const MobileMenu = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      {isNavOpen ? (
        <>
          <div className="order-10 w-full flex-wrap md:hidden">
            <ul>
              <li className="mt-4 mr-4 hover:text-indigo-700 md:mt-0 md:inline-block">
                About
              </li>

              <Link href="/posts">
                <li className="mt-4 mr-4 hover:text-indigo-700 md:mt-0 md:inline-block">
                  Articles
                </li>
              </Link>
            </ul>
          </div>
          <div className="order-9 flex-none md:hidden">
            <CrossIcon onClick={() => setNavOpen(!isNavOpen)} />
          </div>
        </>
      ) : (
        <div className="order-9 flex-none md:hidden">
          <HamburgerIcon onClick={() => setNavOpen(!isNavOpen)} />
        </div>
      )}
    </>
  );
};

const DesktopMenu = () => {
  return (
    <>
      <div className="order-6 mr-6 hidden md:flex">
        <ul>
          <li className="mt-4 mr-6 text-xl hover:text-indigo-700 md:mt-0 md:inline-block">
            About
          </li>
          <Link href="/posts">
            <li className="mt-4 mr-6 text-xl hover:text-indigo-700 md:mt-0 md:inline-block">
              Articles
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const Nav = () => {
  // https://flowbite.com/docs/components/navbar/
  return (
    <nav className="sticky top-0 w-full bg-gray-50 shadow-sm dark:bg-gray-900">
      <div className="max-w-8xl container mx-auto flex flex-wrap items-center justify-between px-5 py-4 md:py-6">
        {/* logo */}
        <div className="order-first mr-6 flex-none">
          <Link href="/">
            <a className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl">
              sugardon blog
            </a>
          </Link>
        </div>
        {/* center */}
        <div className="order-5 flex-grow"></div>
        {/* right */}
        <div className="order-8 flex-none">
          <DarkSwitcher />
        </div>
        {/* right md:center */}
        <MobileMenu />
        <DesktopMenu />
      </div>
    </nav>
  );
};

export default Nav;
