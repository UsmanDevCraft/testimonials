import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth/useLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();

  const [creds, setCreds] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const fetchLogin = async (e) => {
    e.preventDefault();
    loginMutate(creds);
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
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

            <form onSubmit={fetchLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label text-secondary small fw-bold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control form-control-custom"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="form-label text-secondary small fw-bold"
                >
                  Password
                </label>
                <div className="d-flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-custom"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    onChange={onChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-outline-secondary"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary-gradient w-100 py-3 mb-4"
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
