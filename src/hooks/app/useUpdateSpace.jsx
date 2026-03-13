import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSpace } from "../../services/app/app.service";
import { useAlert } from "../../context/alertsContext";

export const useUpdateSpace = ({ id, data }) => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  return useMutation({
    mutationFn: () => updateSpace(id, data),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-space"] });
      showAlert(data.message || "Space updated successfully!", "success");
    },
    onError: (error) => {
      showAlert(error.message || "Error updating space", "error");
    },
  });
};
