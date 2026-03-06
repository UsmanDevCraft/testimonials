import { fetcher } from "../../utils/fetcher";
import { APP } from "../../routes/routes";

// POST Space
export const createSpace = (payload) => {
  return fetcher(APP.SPACE.CREATE_SPACE, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

// GET Space
export const getSpace = () => {
  return fetcher(APP.SPACE.GET_SPACE, { method: "GET" });
};

// POST Review
export const createReview = (payload) => {
  return fetcher(APP.REVIEWS.CREATE_REVIEW, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

// GET Review
export const getReviews = () => {
  return fetcher(APP.REVIEWS.GET_REVIEW, { method: "GET" });
};

// DELETE Review
export const deleteReview = (id) => {
  return fetcher(APP.REVIEWS.DELETE_REVIEW(id), { method: "DELETE" });
};
