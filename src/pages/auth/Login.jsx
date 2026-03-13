import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth/useLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginSchema } from "../../schemas/auth/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    loginMutate(data);
  };

  const onClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card-premium p-5 shadow-lg">
            <h1 className="display-6 fw-bold mb-2 gradient-text">
              Welcome Back
            </h1>
            <p className="text-secondary mb-5">
              Enter your credentials to access your dashboard.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="name@example.com"
                  {...register("email")}
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
                    placeholder="••••••••"
                    {...register("password")}
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
                Sign In
              </button>
            </form>

            <div className="text-center">
              <p className="text-secondary small mb-0">
                Don&apos;t have an account?{" "}
                <span
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={onClick}
                >
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
