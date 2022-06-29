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
  const link = `/posts/${params.year}/${params.month}/${params.day}/${params.name}`;

  return (
    <div className="flex flex-wrap py-8 md:flex-nowrap">
      <div className="mb-6 mr-20 flex flex-shrink-0 flex-col">
        <span className="title-font font-semibold">
          {new Date(props.post.postMeta.date).toLocaleDateString()}
        </span>
        <span className="mt-1 text-sm">{"TODO: Tags"}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="title-font mb-2 text-2xl font-medium">
          <Link href={link}>
            <a className="transition duration-100 hover:text-indigo-700 active:text-indigo-800">
              {props.post.postMeta.title}
            </a>
          </Link>
        </h2>
        <p className="leading-relaxed">{props.post.postMeta.description}</p>
      </div>
    </div>
  );
};

// https://tailblocks.cc/
export const List: React.FC<{ posts: Post[] }> = (props) => {
  return (
    <div className="-my-8 divide-y-2 divide-gray-100">
      {props.posts.map((p, i) => {
        return (
          <div key={i}>
            <Content post={p} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
