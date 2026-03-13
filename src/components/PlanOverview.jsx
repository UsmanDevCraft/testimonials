import { CgCamera } from "react-icons/cg";
import { FaRegSmile } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";

const PlanOverview = () => {
  return (
    <div>
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
    </div>
  );
};

export default PlanOverview;
