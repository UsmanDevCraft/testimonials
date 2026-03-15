import { useEffect } from "react";
import { useCreateSpace } from "../hooks/app/space/useCreateSpace";
import { spaceSchema } from "../schemas/app/spaceSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useGetSpaceById } from "../hooks/app/space/useSpace";
import { useUpdateSpace } from "../hooks/app/space/useUpdateSpace";

const Newspace = () => {
  const { id } = useParams();
  const { mutate } = useCreateSpace();
  const { mutate: updateSpaceMutation } = useUpdateSpace();

  const { data } = useGetSpaceById(id);
  const isUpdateData = !!(id && data?.data);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(spaceSchema),
    mode: "onBlur",
    defaultValues: {
      spaceName: "",
      spaceDesc: "",
      customMessage: "",
    },
  });

  useEffect(() => {
    if (isUpdateData) {
      reset({
        spaceName: data?.data?.spaceName || "",
        spaceDesc: data?.data?.spaceDesc || "",
        customMessage: data?.data?.customMessage || "",
      });
    }
  }, [isUpdateData, data, reset]);

  const onSubmit = (data) => {
    if (id) {
      updateSpaceMutation({ id, data });
    } else {
      mutate(data);
    }
  };

  return (
    <div className="container">
      <h3 className="text-center mt-4">
        {isUpdateData ? "Update this" : "Create a new"} Space
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="spaceName" className="form-label">
            Space name<code>*</code>
          </label>
          <input
            type="text"
            className={`form-control form-control-custom ${
              errors.spaceName ? "is-invalid" : ""
            }`}
            id="spaceName"
            name="spaceName"
            aria-describedby="emailHelp"
            {...register("spaceName")}
          />
          {errors.spaceName && (
            <div className="invalid-feedback d-block">
              {errors.spaceName.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="spaceDesc" className="form-label">
            Space description<code>*</code>
          </label>
          <input
            type="text"
            className={`form-control form-control-custom ${
              errors.spaceDesc ? "is-invalid" : ""
            }`}
            id="spaceDesc"
            name="spaceDesc"
            aria-describedby="emailHelp"
            {...register("spaceDesc")}
          />
          {errors.spaceDesc && (
            <div className="invalid-feedback d-block">
              {errors.spaceDesc.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="customMessage" className="form-label">
            your custom message
          </label>
          <input
            type="text"
            className={`form-control form-control-custom ${
              errors.customMessage ? "is-invalid" : ""
            }`}
            id="customMessage"
            name="customMessage"
            aria-describedby="emailHelp"
            {...register("customMessage")}
          />
          {errors.customMessage && (
            <div className="invalid-feedback d-block">
              {errors.customMessage.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isDirty || !isValid}
        >
          {isUpdateData ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Newspace;
