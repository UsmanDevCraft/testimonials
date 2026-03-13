import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview } from "../../../services/app/app.service";
import { useAlert } from "../../../context/alertsContext";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-reviews"] });
      showAlert(data.message || "Review deleted successfully!", "success");
    },
    onError: (error) => {
      showAlert(error.message || "Error deleting review", "error");
    },
  });
};
