import { useMutation } from "@tanstack/react-query";
import { createReview } from "../../services/app/app.service";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alertContext";

export const useCreateReview = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: createReview,
    onSuccess: (data) => {
      showAlert(data.message || "Review Sent Successfully.", "success");
      navigate("/home");
    },
    onError: (error) => {
      showAlert(error.message || "Error creating review", "error");
    },
  });

  return mutation;
};
