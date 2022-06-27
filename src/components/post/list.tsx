import Link from "next/link";
import React from "react";
import { Post } from "../../types/post";

const Content: React.FC<{ post: Post }> = (props) => {
  const pathList = props.post.path.split("/");
  const params = {
    year: pathList.slice(-4)[0],
    month: pathList.slice(-3)[0],
    day: pathList.slice(-2)[0],
    name: pathList.slice(-1)[0],
  };

  return (
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="flex flex-wrap py-8 md:flex-nowrap">
        <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
          <span className="font-semibold text-gray-700 title-font">
            {new Date(props.post.postMeta.date).toLocaleDateString()}
          </span>
          <span className="mt-1 text-sm text-gray-500">{"TODO: Tags"}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
            <Link
              href={`/posts/${params.year}/${params.month}/${params.day}/${params.name}`}
            >
              {props.post.postMeta.title}
            </Link>
          </h2>
          <p className="leading-relaxed">{props.post.postMeta.description}</p>
          <a
            href={`/posts/${params.year}/${params.month}/${params.day}/${params.name}`}
            className="inline-flex items-center mt-4 text-indigo-500"
          >
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
          return (
            <div key={i}>
              <Content post={p} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;
