import { useMutation } from "@tanstack/react-query";
import { createSpace } from "../../services/app/app.service";
import { useAlert } from "../../context/alertsContext";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const useCreateSpace = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: createSpace,
    onSuccess: (data) => {
      showAlert(data.message || "Space created successfully!", "success");
      navigate("/home");
      queryClient.invalidateQueries({ queryKey: ["get-space"] });
    },
    onError: (error) => {
      showAlert(error.message || "Error creating space", "error");
    },
  });

  return mutation;
};
