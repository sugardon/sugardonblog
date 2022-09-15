import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
          blog.sugardon.com
        </p>

        <h1 className="mb-8 text-4xl font-bold text-black-800 sm:text-5xl md:mb-12 md:text-6xl">
          blog
        </h1>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#"
            className="inline-block px-8 py-3 text-sm font-semibold text-center text-white bg-indigo-500 rounded-lg outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            About
          </a>

          <Link href="/posts">
            <a className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 bg-gray-200 rounded-lg outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
              Articles
            </a>
          </Link>
        </div>
      </div>

      <div className="h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg lg:h-auto xl:w-5/12">
        <img
          src="./sugardon.webp"
          loading="lazy"
          alt="sugardon"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </section>
  );
};
export default Hero;
