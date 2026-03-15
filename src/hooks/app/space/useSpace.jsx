import { useQuery } from "@tanstack/react-query";
import { getSpaceById } from "../../../services/app/app.service";

export const useGetSpaceById = (id) => {
  const query = useQuery({
    queryKey: ["get-space-by-id", id],
    queryFn: () => getSpaceById(id),
    staleTime: 0,
    retry: 1,
  });

  return query;
};
