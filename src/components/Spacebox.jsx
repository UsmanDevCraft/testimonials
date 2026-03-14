import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import ConfirmModal from "./shared/ConfirmModal";
import { useDeleteSpace } from "../hooks/app/space/useDeleteSpace";

const Spacebox = ({ spaces }) => {
  const navigate = useNavigate();
  const { mutate: deleteSpaceMutation } = useDeleteSpace();

  const [selectedSpace, setSelectedSpace] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteSpace = () => {
    if (!selectedSpace._id) return;
    deleteSpaceMutation(selectedSpace._id);
    setIsDeleteModalOpen(false);
  };

  const onClick = () => {
    navigate("/spacepage");
  };

  return (
    <>
      {spaces && spaces.length > 0 ? (
        spaces.map((space, index) => {
          return (
            <div
              key={index}
              onClick={() => onClick(space)}
              className="col-md-6 col-lg-4"
              style={{ cursor: "pointer" }}
            >
              <div className="card-premium h-100 p-4 shadow-sm border-0 position-relative glass-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="fw-bold mb-0 text-white">{space.spaceName}</h5>
                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-10 px-2 py-1 small rounded-pill">
                    Active
                  </span>
                </div>
                <h6 className="text-secondary small mb-3 fw-bold">
                  {space.spaceDesc}
                </h6>
                <div className="bg-white bg-opacity-5 p-3 rounded-3 mb-2">
                  <p
                    className="text-secondary mb-0 small text-truncate-2"
                    style={{ fontStyle: "italic" }}
                  >
                    {space.customMessage ||
                      "No custom message set for this space."}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <div
                      className="rounded-circle bg-success shadow-success"
                      style={{ width: "8px", height: "8px" }}
                    ></div>
                    <span className="text-secondary small">
                      Collecting reviews
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-light border-secondary">
                      <FaPen />
                    </button>
                    <button
                      className="btn btn-outline-light border-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSpace(space);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="col-12 mt-4">
          <div className="card-premium p-5 text-center border-dashed bg-transparent shadow-none">
            <div className="mb-4">
              <div
                className="mx-auto bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px", fontSize: "2.5rem" }}
              >
                🚀
              </div>
            </div>
            <h4 className="fw-bold mb-2 text-white">Your Workspace is Empty</h4>
            <p
              className="text-secondary mb-5 mx-auto opacity-75"
              style={{ maxWidth: "420px" }}
            >
              Ready to grow? Create your first space and start collecting
              powerful testimonials that build trust and drive conversions.
            </p>
            <button
              onClick={() => navigate("/newspace")}
              className="btn btn-primary-gradient px-5 py-3 rounded-pill fw-bold shadow-lg"
            >
              Launch Your First Space
            </button>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <ConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteSpace}
          title="Delete Space"
          description={`Are you sure you want to delete ${selectedSpace?.spaceName}?`}
        />
      )}
    </>
  );
};

export default Spacebox;
