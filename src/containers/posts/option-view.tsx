import React from "react";
import { TagIcon } from "../../components/icon";
import { Options } from "../../types/post-page";

interface OptionViewProps {
  options: Options;
}
// https://tailblocks.cc/
export const OptionView: React.FC<OptionViewProps> = ({ options }) => {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-center space-x-3 text-2xl md:justify-start">
      {options.showDraft && (
        <div
          id="SHOW-DRAFT"
          className="rounded border-2 border-orange-700 px-2 py-1"
        >
          Include draft posts!
        </div>
      )}
      {options.tag && (
        <div
          id="TAG"
          className="flex items-center justify-center space-x-3 rounded border-2 px-2 py-1"
        >
          <TagIcon />
          <span className="text-center text-3xl">{options.tag}</span>
        </div>
      )}
    </div>
  );
};

export default OptionView;
