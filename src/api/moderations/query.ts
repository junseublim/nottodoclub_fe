import { useQuery } from "react-query";
import { getModerations } from ".";

export const useGetModerations = (
  id: string,
  startDate: Date,
  endDate: Date,
  enabled: boolean
) => {
  const startDateISO = startDate.toISOString();
  const endDateISO = endDate.toISOString();

  const query = useQuery({
    queryKey: ["moderations", id, startDateISO, endDateISO],
    queryFn: () => getModerations(id, startDateISO, endDateISO),
    enabled,
  });
  return query;
};
