import { get, post } from "@/api/core";
import { Moderation } from "@/types";
import { PostModerationReq } from ".";

export const getModerations = (
  id: string,
  startDate: string,
  endDate: string
) => {
  return get<Moderation[]>(
    `/moderations?nottodoId=${id}&startDate=${startDate}&endDate=${endDate}`
  );
};

export const postModeration = (data: PostModerationReq) => {
  return post<Moderation>("/moderations", data);
};
