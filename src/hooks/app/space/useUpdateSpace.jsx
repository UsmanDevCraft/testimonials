import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSpace } from "../../../services/app/app.service";
import { useAlert } from "../../../context/alertsContext";

export const useUpdateSpace = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  return useMutation({
    mutationFn: ({ id, data }) => updateSpace({ id, payload: data }),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["get-space"] });
      queryClient.invalidateQueries({
        queryKey: ["get-space-by-id", variables.id],
      });
      showAlert(data.message || "Space updated successfully!", "success");
    },
    onError: (error) => {
      showAlert(error.message || "Error updating space", "error");
    },
  });
};
