import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview } from "../../services/app/app.service";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-reviews"] });
      alert("Review deleted successfully!");
    },
    onError: (error) => {
      alert(`Error deleting review: ${error.message}`);
    },
  });
};
