import { useQuery } from "react-query"
import { getAllModerationByNottodoId } from "."

export const useGetAllModerationByNottodoId = (id: string, enabled: boolean) => {
  const query = useQuery({
    queryKey: ['moderations', id],
    queryFn: () => getAllModerationByNottodoId(id),
    enabled
  })

  return query
}