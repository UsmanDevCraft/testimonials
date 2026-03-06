import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/auth/auth.service";

export const useGetUserData = () => {
  const query = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return query;
};
