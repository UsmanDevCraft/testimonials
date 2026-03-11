import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alertContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful!", data);
      localStorage.setItem("token", data.authToken);
      showAlert(
        data.message || "Login was Successfull, HAPPY HACKING!",
        "success",
      );
      navigate("/home");
    },
    onError: (error) => {
      console.error(error.message);
      showAlert(error.message || "Something went wrong", "error");
    },
  });

  return mutation;
};
