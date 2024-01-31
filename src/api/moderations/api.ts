import { get } from "@/api/core"
import { Moderation } from "@/types"

export const getAllModerationByNottodoId = (id: string) => {
  return get<Moderation[]>(`/moderations?nottodoId=${id}`)
}