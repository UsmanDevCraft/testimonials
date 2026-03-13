import { useQuery } from "@tanstack/react-query";
import { getSpace } from "../../../services/app/app.service";

export const useGetSpaces = () => {
  const query = useQuery({
    queryKey: ["get-space"],
    queryFn: getSpace,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return query;
};
