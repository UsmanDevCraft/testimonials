import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alertContext";

export const useSignup = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("Signup successful!", data);
      localStorage.setItem("token", data.authToken);
      showAlert(
        data.message ||
          "Account Signed In Successfully, Login to move further.",
        "success",
      );
      navigate("/login");
    },
    onError: (error) => {
      showAlert(
        error.message || "Account already exists, try another please.",
        "error",
      );
      console.error(error.message);
    },
  });

  return mutation;
};
