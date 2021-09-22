import { GET_POSTS } from "../actions/types";
const initialState = {
  items: [],
};
export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
