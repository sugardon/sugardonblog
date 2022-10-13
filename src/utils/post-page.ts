import { ParsedUrlQuery } from "querystring";
import { Options } from "../types/post-page";

export const GetOptions = (query: ParsedUrlQuery): Options => {
  const showDraft = query["show-draft"];
  const tag = query.tag;
  const pageSize = query["page-size"];
  const pageNumber = query["page-number"];

  const options: Options = {
    showDraft:
      typeof showDraft === "string" && ["True", "true"].includes(showDraft),
    tag: typeof tag === "string" ? tag : undefined,
    pageSize: isNaN(Number(pageSize)) ? 0 : Number(pageSize),
    pageNumber: isNaN(Number(pageNumber)) ? 0 : Number(pageNumber),
  };
  return options;
};
