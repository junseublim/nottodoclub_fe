import { useQuery } from "react-query"
import { getAllNottodosByUserId } from "."

export const useGetAllNottodosByUserId = (id: string) => {
  const query = useQuery({
    queryKey: ['moderations', id],
    queryFn: () => getAllNottodosByUserId(id)
  })

  return query
}