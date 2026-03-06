import { useMutation } from "@tanstack/react-query";
import { createSpace } from "../../services/app/app.service";

export const useCreateSpace = () => {
  const mutation = useMutation({
    mutationFn: createSpace,
    onSuccess: (data) => {
      localStorage.setItem("spaceToken", data.savedSpace.spaceToken);
    },
    onError: (error) => {
      alert(error.message);
      console.error(error.message);
    },
  });

  return mutation;
};
