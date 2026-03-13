import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/auth/useSignup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signupSchema } from "../../schemas/auth/signupSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {
  const navigate = useNavigate();
  const { mutate: signupMutate } = useSignup();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    signupMutate(data);
  };

  const onClick = () => {
    navigate("/login");
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card-premium p-5 shadow-lg">
            <h1 className="display-6 fw-bold mb-2 gradient-text">
              Create Account
            </h1>
            <p className="text-secondary mb-5">
              Sign up to start collecting testimonials today.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="form-label text-secondary small fw-bold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-custom ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  {...register("name")}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label text-secondary small fw-bold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className={`form-control form-control-custom ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="form-label text-secondary small fw-bold"
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control form-control-custom ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    {...register("password")}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-outline-secondary"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                  {errors.password && (
                    <div className="invalid-feedback d-block">
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary-gradient w-100 py-3 mb-4"
                disabled={!isDirty || !isValid}
              >
                Create Account
              </button>
            </form>

            <div className="text-center">
              <p className="text-secondary small mb-0">
                Already have an account?{" "}
                <span
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={onClick}
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
