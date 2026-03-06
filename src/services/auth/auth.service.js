import { fetcher } from "../../utils/fetcher";
import { AUTH } from "../../routes/routes";

// POST User
export const login = (payload) => {
  return fetcher(AUTH.LOGIN, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

// POST User
export const signup = (payload) => {
  return fetcher(AUTH.SIGNUP, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

// GET User
export const getUser = () => {
  return fetcher(AUTH.GET_USER_DATA, { method: "GET" });
};
