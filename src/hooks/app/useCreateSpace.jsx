import { useMutation } from "@tanstack/react-query";
import { createSpace } from "../../services/app/app.service";
import { useAlert } from "../../context/alertContext";

export const useCreateSpace = () => {
  const { showAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: createSpace,
    onSuccess: (data) => {
      localStorage.setItem("spaceToken", data.savedSpace.spaceToken);
      showAlert(data.message || "Space created successfully!", "success");
    },
    onError: (error) => {
      showAlert(error.message || "Error creating space", "error");
    },
  });

  return mutation;
};
