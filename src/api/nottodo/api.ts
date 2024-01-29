import { get } from "@/api/core"

export const getAllNottodosByUserId = (id: string) => {
  return get(`/nottodo?userId=${id}`)
}