import { get } from "@/api/core"
import { Nottodo } from "@/types"

export const getAllNottodosByUserId = (id: string) => {
  return get<Nottodo[]>(`/nottodo?userId=${id}`)
}