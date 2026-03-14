import { NavLink, Link } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    setIsModalOpen(false);
    navigate("/login", { replace: true });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg glass-nav py-3">
        <div className="container">
          <Link
            className="navbar-brand text-white fw-bold d-flex align-items-center gap-2 me-5"
            to="/"
            style={{ fontSize: "1.5rem" }}
          >
            <AiTwotoneLike className="text-primary" />
            <span className="gradient-text">Testimonial</span>
          </Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom me-3" to="/home">
                  Dashboard
                </NavLink>
              </li>
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link nav-link-custom me-3"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link nav-link-custom me-3"
                      to="/signup"
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="nav-link nav-link-custom me-3"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
            <div className="d-flex">
              <Link to="/home" className="btn btn-primary-gradient px-4">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <ConfirmModal
          isOpen={isModalOpen}
          title="Logout"
          description="Are you sure you want to logout?"
          onConfirm={handleLogout}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
