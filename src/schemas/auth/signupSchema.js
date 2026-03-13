import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name cannot exceed 20 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[0-9]/, "At least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least one special symbol"),
});
