import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PostMeta } from "../../types/post";
import { Options } from "../../types/post-page";

const Content: React.FC<{ postMeta: PostMeta }> = (props) => {
  const path = props.postMeta.path;
  const link = `/posts/${path.year}/${path.month}/${path.day}/${path.name}`;

  const [postDate, setPostDate] = useState("");
  useEffect(
    () => setPostDate(new Date(props.postMeta.date).toLocaleDateString()),
    []
  );

  return (
    <div className="flex flex-wrap py-8 md:flex-nowrap">
      <div className="mb-6 mr-20 flex flex-shrink-0 flex-col">
        <span className="title-font font-semibold">{postDate}</span>
        <span className="mt-1 text-sm">{"TODO: Tags"}</span>
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

interface PostListProps {
  postMeta: PostMeta[];
  options?: Options;
}
// https://tailblocks.cc/
export const List: React.FC<PostListProps> = (props) => {
  let pms = props.postMeta;

  if (props.options) {
    pms = props.options.showDraft ? pms : pms.filter((pm) => !pm.draft);
    pms =
      props.options.pageSize !== 0 && props.options.pageNumber !== 0
        ? pms.slice(
            props.options.pageSize * (props.options.pageNumber - 1),
            props.options.pageSize * (props.options.pageNumber - 1) +
              props.options.pageSize
          )
        : pms;
  }

  return (
    <div className="-my-8 divide-y-2 divide-gray-100 dark:divide-slate-700">
      {pms.map((pm, i) => {
        return (
          <div key={i}>
            <Content postMeta={pm} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
