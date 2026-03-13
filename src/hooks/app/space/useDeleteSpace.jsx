import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSpace } from "../../../services/app/app.service";
import { useAlert } from "../../../context/alertsContext";

export const useDeleteSpace = (id) => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  return useMutation({
    mutationFn: deleteSpace(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-space"] });
      showAlert(data.message || "Space deleted successfully!", "success");
    },
    onError: (error) => {
      showAlert(error.message || "Error deleting space", "error");
    },
  });
};
