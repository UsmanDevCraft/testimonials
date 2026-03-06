import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth/useLogin";

const Login = () => {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();

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
    <div className="container d-flex justify-content-center">
      <div>
        <h1 className="mt-5">Welcome to Login Page.</h1>

        <form onSubmit={fetchLogin}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <p className="mt-3" style={{ cursor: "pointer" }} onClick={onClick}>
          <code>Don&apos;t have an account, click here to signup.</code>
        </p>
      </div>
    </div>
  );
};

export default Login;
