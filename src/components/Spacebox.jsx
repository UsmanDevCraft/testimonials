import { useNavigate } from "react-router-dom";

const Spacebox = ({ spaces }) => {
  const navigate = useNavigate();

  const onClick = (space) => {
    localStorage.setItem("spaceToken", space.spaceToken);
    // console.log(localStorage.getItem("spaceToken"))
    // console.log("Selected space token:", space.spaceToken);
    navigate("/spacepage");
  };

  return (
    <>
      {spaces && spaces.length > 0 ? (
        spaces.map((space, index) => {
          // console.log(space);
          return (
            <div
              key={index}
              onClick={() => onClick(space)}
              className="col-md-6 col-lg-4"
              style={{ cursor: "pointer" }}
            >
              <div className="card-premium h-100 p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="fw-bold mb-0">{space.spaceName}</h5>
                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-2 py-1">
                    Active
                  </span>
                </div>
                <h6 className="text-secondary small mb-3">
                  {space.headerTitle}
                </h6>
                <p className="text-secondary mb-0 small text-truncate-2">
                  {space.customMessage ||
                    "No custom message set for this space."}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="noSpaceImage">
          <img
            src="https://testimonial.to/static/media/no-message.18de8749.svg"
            height="100px"
            width="100px"
            alt="SpaceImg"
          />
          <p>No space yet, add a new one?</p>
        </div>
      )}
    </>
  );
};

export default Spacebox;
