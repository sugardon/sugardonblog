import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PostMeta } from "../../types/post";

const Tag: React.FC<{ tag: string[] }> = (props) => {
  return (
    <div className="flex flex-wrap py-1">
      {props.tag.map((t, i) => {
        return (
          <div
            key={i}
            className="mx-1 my-1 flex items-center rounded-full bg-gray-300 px-2 py-1 text-sm font-semibold text-slate-800"
          >
            <Link href={`/posts?tag=${t}`}>
              <a className="transition duration-100 hover:text-indigo-700 active:text-indigo-800">
                {t}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const Row: React.FC<{ postMeta: PostMeta }> = (props) => {
  const path = props.postMeta.path;
  const link = `/posts/${path.year}/${path.month}/${path.day}/${path.name}`;

  const [postDate, setPostDate] = useState("");
  useEffect(
    () => setPostDate(new Date(props.postMeta.date).toLocaleDateString()),
    []
  );

  return (
    <div className="flex flex-wrap py-8 md:flex-nowrap">
      <div className="mr-10 flex w-60 flex-shrink-0 flex-col">
        <span className="title-font font-semibold">{postDate}</span>
        {props.postMeta.tag.length !== 0 && <Tag tag={props.postMeta.tag} />}
      </div>
      <div className="md:flex-grow">
        <h2 className="title-font mb-2 text-2xl font-medium">
          <Link href={link}>
            <a className="transition duration-100 hover:text-indigo-700 active:text-indigo-800">
              {props.postMeta.title}
            </a>
          </Link>
        </h2>
        <p className="leading-relaxed">{props.postMeta.description}</p>
      </div>
    </div>
  );
};

export default Row;
