import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alertsContext";

export const useSignup = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      localStorage.setItem("token", data.authToken);
      showAlert(data.message || "Account Signed In Successfully", "success");
      navigate("/home");
    },
    onError: (error) => {
      showAlert(
        error.message || "Account already exists, try another please.",
        "error",
      );
    },
  });

  return mutation;
};
