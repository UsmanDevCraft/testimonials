import { useNavigate } from "react-router-dom";
import { useDeleteReview } from "../hooks/app/reviews/useDeleteReview";
import {
  FaTrash,
  FaUserSecret,
  FaEnvelope,
  FaQuoteLeft,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const Reviewbox = ({ reviews }) => {
  const { mutate: deleteReview } = useDeleteReview();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="row g-4 w-100">
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="col-12 col-xl-6">
            <div className="card-premium p-4 h-100 shadow-sm border-0 position-relative glass-card">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary shadow-sm">
                    <FaUserSecret size={24} />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="fw-bold mb-0 text-white">{review.name}</h5>
                      <FaCheckCircle
                        className="text-primary small"
                        style={{ fontSize: "0.8rem" }}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 text-secondary small mt-1 opacity-75">
                      <FaEnvelope size={10} />
                      <span>{review.email}</span>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm border-0 bg-transparent p-2 text-opacity-50 hover-opacity-100 transition-all opacity-50"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this testimonial?",
                      )
                    ) {
                      deleteReview(review._id);
                    }
                  }}
                  title="Delete Testimonial"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="bg-white bg-opacity-5 p-4 rounded-4 position-relative mb-4 border border-white border-opacity-5">
                <FaQuoteLeft
                  className="position-absolute text-primary opacity-10"
                  style={{ top: "15px", left: "15px" }}
                  size={24}
                />
                <p
                  className="text-secondary-emphasis mb-0 fs-6 lh-base ps-2"
                  style={{ fontStyle: "italic", fontWeight: "300" }}
                >
                  {review.review}
                </p>
                <div className="mt-3 d-flex gap-1 text-warning opacity-75">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
              </div>

              <div className="mt-auto d-flex justify-content-between align-items-center">
                <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20 px-3 py-2 rounded-pill small fw-normal">
                  Social Proof Verified
                </span>
                <small className="text-secondary opacity-50">
                  Saved to Wall of Love
                </small>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12 mt-5">
          <div className="card-premium p-5 text-center border-dashed bg-transparent shadow-none">
            <div
              className="mb-4 p-4 rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center"
              style={{ width: "120px", height: "120px" }}
            >
              <img
                src="https://testimonial.to/static/media/no-message.18de8749.svg"
                className="opacity-50"
                style={{
                  height: "70px",
                  width: "70px",
                  filter: "invert(1) brightness(2)",
                }}
                alt="Empty State"
              />
            </div>
            <h3 className="fw-bold mb-3 text-white">Silence is Golden?</h3>
            <p
              className="text-secondary mx-auto mb-5 opacity-75"
              style={{ maxWidth: "480px", fontSize: "1.1rem" }}
            >
              It looks like you haven&apos;t received any testimonials in this
              space yet. Share your testimonial link and let your customers do
              the marketing for you!
            </p>
            <button
              onClick={handleGoHome}
              className="btn btn-primary-gradient px-5 py-3 rounded-pill fw-bold shadow-lg"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviewbox;
