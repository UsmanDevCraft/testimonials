import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/auth/useSignup";

const Signup = () => {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const { mutate: signupMutate } = useSignup();

  const fetchUser = async (e) => {
    e.preventDefault();
    signupMutate(creds);
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
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

            <form onSubmit={fetchUser}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="form-label text-secondary small fw-bold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-custom"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  onChange={onChange}
                  required
                />
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
                <input
                  type="password"
                  className="form-control form-control-custom"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  onChange={onChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary-gradient w-100 py-3 mb-4"
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
