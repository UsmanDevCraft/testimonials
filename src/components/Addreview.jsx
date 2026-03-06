import { useState } from "react";
import { useCreateReview } from "../hooks/app/useCreateReview";

const Addreview = () => {
  const [data, setData] = useState({ review: "", name: "", email: "" });

  const { mutate } = useCreateReview();

  const fetchReview = async (e) => {
    e.preventDefault();
    mutate(data);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Please write your review here.</h1>
      <form
        onSubmit={(e) => {
          fetchReview(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="review" className="form-label">
            Review<code>*</code>
          </label>
          <input
            type="text"
            className="form-control"
            id="review"
            name="review"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name<code>*</code>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email<code>*</code>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addreview;
