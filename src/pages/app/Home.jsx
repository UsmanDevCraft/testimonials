import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spacebox from "../../components/Spacebox";
import { CgCamera } from "react-icons/cg";
import { FaRegSmile } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [spaces, Setspaces] = useState([]);

  const fetchSpaces = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        "https://testimonial-backend.vercel.app/api/newspace/getspace",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        },
      );
      const json = await response.json();
      if (json.error) {
        alert(json.error);
      } else {
        Setspaces(json.space);
        // console.log({"json": json, "json space":json.space})
        // localStorage.setItem("spaceToken", json.spaceToken);
      }
      setLoader(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://testimonial-backend.vercel.app/api/auth/getuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        },
      );
      const json = await response.json();
      // console.log(json);
      // console.log(json.user);
      if (!json.user) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSpaces();
  }, []);
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="dashboard-container py-5">
        <div className="container">
          <header className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h1 className="display-5 fw-bold gradient-text mb-2">
                Welcome Back!
              </h1>
              <p className="text-secondary fs-5 mb-0">
                Manage your spaces and testimonials here.
              </p>
            </div>
            <Link to="/newspace">
              <button className="btn btn-primary-gradient d-flex gap-2 align-items-center">
                <FaPlus />
                <span>Create New Space</span>
              </button>
            </Link>
          </header>

          {/* Overview Stats */}
          <section className="mb-5">
            <h2 className="fs-4 fw-bold mb-4 opacity-75">Overview</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card-premium p-4 d-flex align-items-center gap-4">
                  <div className="feature-icon mb-0 flex-shrink-0">
                    <CgCamera />
                  </div>
                  <div>
                    <p className="text-secondary small mb-1">Total Videos</p>
                    <h3 className="fw-bold mb-0">0</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-premium p-4 d-flex align-items-center gap-4">
                  <div
                    className="feature-icon mb-0 flex-shrink-0"
                    style={{
                      background: "rgba(0, 210, 255, 0.1)",
                      color: "var(--accent-secondary)",
                    }}
                  >
                    <FaRegSmile />
                  </div>
                  <div>
                    <p className="text-secondary small mb-1">Video Credits</p>
                    <h3 className="fw-bold mb-0">0</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-premium p-4 d-flex align-items-center gap-4">
                  <div
                    className="feature-icon mb-0 flex-shrink-0"
                    style={{
                      background: "rgba(255, 107, 107, 0.1)",
                      color: "#ff6b6b",
                    }}
                  >
                    <IoBagHandleSharp />
                  </div>
                  <div>
                    <p className="text-secondary small mb-1">Current Plan</p>
                    <h3 className="fw-bold mb-0">Free Plan</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spaces Section */}
          <section>
            <div className="d-flex justify-content-between align-items-end mb-4">
              <h2 className="fs-4 fw-bold mb-0 opacity-75">Your Spaces</h2>
              <span className="text-secondary small">
                {spaces.length} space(s) active
              </span>
            </div>

            {loader ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="spaces-list mb-4">
                {spaces.length > 0 ? (
                  <div className="row g-4">
                    <Spacebox spaces={spaces} />
                  </div>
                ) : (
                  <div className="card-premium p-5 text-center border-dashed">
                    <p className="text-secondary mb-4">
                      You haven&apos;t created any spaces yet.
                    </p>
                    <Link
                      to="/newspace"
                      className="btn btn-outline-light border-secondary"
                    >
                      Create your first space
                    </Link>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
