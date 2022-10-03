import { ParsedUrlQuery } from "querystring";
import { Options } from "../types/post-page";

export const GetOptions = (query: ParsedUrlQuery): Options => {
  const { showDraft } = query;

  const options: Options = {
    showDraft:
      typeof showDraft === "string" && ["True", "true"].includes(showDraft),
  };
  return options;
};
