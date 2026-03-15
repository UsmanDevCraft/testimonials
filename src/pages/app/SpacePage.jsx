import Reviewbox from "../../components/Reviewbox";
import { useGetReviews } from "../../hooks/app/reviews/useReviews";

const SpacePage = () => {
  const authToken = localStorage.getItem("token");
  const spaceToken = localStorage.getItem("spaceToken");

  const { data: reviews, isLoading } = useGetReviews();

  // Create the URL with the spaceToken
  const reviewUrl = `https://client-testimonial.vercel.app/?spaceToken=${encodeURIComponent(spaceToken)}&authToken=${encodeURIComponent(authToken)}`;

  return (
    <div className="container">
      <h6 className="mt-5">
        To get your reviews from clients, forward this url to them.
      </h6>
      {/* <Link to="/addreview">Give me Review</Link> */}
      {/* <a href='https://client-testimonial.vercel.app/' target='_main'>Give me Review</a> */}
      <a href={reviewUrl} target="_blank" rel="noopener noreferrer">
        Give me Review
      </a>

      {isLoading ? (
        <div className="container mt-5 d-flex justify-content-center overflow-hidden">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center flex-wrap gap-3 my-3">
          <Reviewbox reviews={reviews?.reviews} />
        </div>
      )}
    </div>
  );
};

export default SpacePage;
