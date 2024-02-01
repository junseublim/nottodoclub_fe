import { get, post } from "@/api/core";
import { Moderation } from "@/types";
import { PostModerationReq } from ".";

export const getAllModerationByNottodoId = (id: string) => {
  return get<Moderation[]>(`/moderations?nottodoId=${id}`);
};

export const postModeration = (data: PostModerationReq) => {
  return post<Moderation>("/moderations", data);
};
