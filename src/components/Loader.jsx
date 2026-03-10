import "../styles/Loader.css";

const Loading = () => {
  return (
    <div
      className="main-page d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh", background: "transparent" }}
    >
      <div className="position-relative">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{
            width: "4rem",
            height: "4rem",
            borderWidth: "0.25rem",
            filter: "drop-shadow(0 0 15px rgba(13, 110, 253, 0.5))",
          }}
        ></div>

        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="dot-pulse"></div>
        </div>
      </div>

      <h2 className="mt-4 fw-bold gradient-text animate-pulse">Loading...</h2>
      <p className="text-secondary opacity-75">Preparing your experience</p>
    </div>
  );
};

export default Loading;
