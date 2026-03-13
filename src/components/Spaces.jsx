import { Link } from "react-router-dom";
import Spacebox from "./Spacebox";

const Spaces = ({ spacesData, isLoading }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-end mb-4">
        <h2 className="fs-4 fw-bold mb-0 opacity-75">Your Spaces</h2>
        <span className="text-secondary small">
          {spacesData?.data?.length} space(s) active
        </span>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="spaces-list mb-4">
          {spacesData?.data?.length > 0 ? (
            <div className="row g-4">
              <Spacebox spaces={spacesData?.data} />
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
    </div>
  );
};

export default Spaces;
