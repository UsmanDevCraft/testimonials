import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useGetSpaces } from "../../hooks/app/useSpaces";
import Spaces from "../../components/Spaces";
import PlanOverview from "../../components/PlanOverview";

const Home = () => {
  const { data: spacesData, isLoading } = useGetSpaces();

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

          <div className="d-flex flex-column gap-4">
            {/* Overview Stats */}
            <PlanOverview />

            {/* Spaces Section */}
            <Spaces spacesData={spacesData} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
