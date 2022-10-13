import React from "react";
import { PostListRow } from "../../components/post";
import { PostMeta } from "../../types/post";
import { Options } from "../../types/post-page";

interface PostListProps {
  postMeta: PostMeta[];
  options?: Options;
}
// https://tailblocks.cc/
export const List: React.FC<PostListProps> = (props) => {
  let pms = props.postMeta;

  if (props.options) {
    if (!props.options.showDraft) pms = pms.filter((pm) => !pm.draft);
    if (props.options.tag)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      pms = pms.filter((pm) => pm.tag.includes(props.options!.tag!));
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
            <PostListRow postMeta={pm} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
