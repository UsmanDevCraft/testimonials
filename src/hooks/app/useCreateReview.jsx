import { useMutation } from "@tanstack/react-query";
import { createReview } from "../../services/app/app.service";
import { useNavigate } from "react-router-dom";

export const useCreateReview = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      alert("Review Sent Successfully.");
      navigate("/home");
    },
    onError: (error) => {
      alert(error.message);
      console.error(error.message);
    },
  });

  return mutation;
};
