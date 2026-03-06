import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful!", data);
      localStorage.setItem("token", data.authToken);
      alert("Login was Successfull, HAPPY HACKING!");
      navigate("/home");
    },
    onError: (error) => {
      alert(error.message);
      console.error(error.message);
    },
  });

  return mutation;
};
