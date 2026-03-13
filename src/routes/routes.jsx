export const AUTH = {
  SIGNUP: "/auth/createuser",
  LOGIN: "/auth/loginuser",
  GET_USER_DATA: "/auth/getuser",
};

export const APP = {
  SPACE: {
    GET_SPACE: "/newspace/getspace",
    CREATE_SPACE: "/newspace/createspace",
    DELETE_SPACE: (id) => `/newspace/deletespace/${id}`,
    UPDATE_SPACE: (id) => `/newspace/updatespace/${id}`,
  },
  REVIEWS: {
    GET_REVIEW: "/reviews/getreview",
    CREATE_REVIEW: "/reviews/createreview",
    DELETE_REVIEW: (id) => `/reviews/deletereview/${id}`,
  },
};
