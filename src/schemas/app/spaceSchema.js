import * as Yup from "yup";

export const spaceSchema = Yup.object().shape({
  spaceName: Yup.string()
    .required("Space name is required")
    .min(2, "Space name must be at least 2 characters")
    .max(20, "Space name cannot exceed 20 characters"),
  spaceDesc: Yup.string()
    .required("Space description is required")
    .min(2, "Space description must be at least 2 characters")
    .max(300, "Space description cannot exceed 20 characters"),
  customMessage: Yup.string().max(
    300,
    "Custom message cannot exceed 300 characters",
  ),
});
