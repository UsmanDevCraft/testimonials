import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("Signup successful!", data);
      localStorage.setItem("token", data.authToken);
      alert("Account Signed In Successfully, Login to move further.");
      navigate("/login");
    },
    onError: (error) => {
      alert(error.message || "Account already exists, try another please.");
      console.error(error.message);
    },
  });

  return mutation;
};
