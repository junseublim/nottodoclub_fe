import { get } from "@/api/core"

export const getAllModerationByNottodoId = (id: number) => {
  return get(`/moderations?nottodoId=${id}`)
}