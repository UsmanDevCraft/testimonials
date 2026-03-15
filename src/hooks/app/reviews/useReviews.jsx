import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../../services/app/app.service";

export const useGetReviews = () => {
  const query = useQuery({
    queryKey: ["get-reviews"],
    queryFn: getReviews,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return query;
};
