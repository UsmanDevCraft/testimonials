import { useCreateSpace } from "../hooks/app/space/useCreateSpace";
import { spaceSchema } from "../schemas/app/spaceSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Newspace = () => {
  const { mutate } = useCreateSpace();

  const {
    register,
    handleSubmit,
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

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="container">
      <h3 className="text-center mt-4">Create a new Space</h3>

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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newspace;
