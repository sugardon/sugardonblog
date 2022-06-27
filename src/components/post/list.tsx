import React from "react";
import { Post } from "../../types/post";

const Content: React.FC<{ post: Post; key: number }> = (props) => {
  return (
    <div className="-my-8 divide-y-2 divide-gray-100" key={props.key}>
      <div className="flex flex-wrap py-8 md:flex-nowrap">
        <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
          <span className="font-semibold text-gray-700 title-font">
            CATEGORY
          </span>
          <span className="mt-1 text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
            {props.post.postMeta.title}
          </h2>
          <p className="leading-relaxed">
            Glossier echo park pug, church-key sartorial biodiesel vexillologist
            pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger
            bag selfies, poke vaporware kombucha lumbersexual pork belly
            polaroid hoodie portland craft beer.
          </p>
          <a className="inline-flex items-center mt-4 text-indigo-500">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// https://tailblocks.cc/
export const List: React.FC<{ posts: Post[] }> = (props) => {
  return (
    <section className="overflow-hidden text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {props.posts.map((p, i) => {
          return <Content post={p} key={i} />;
        })}
      </div>
    </section>
  );
};

export default List;
