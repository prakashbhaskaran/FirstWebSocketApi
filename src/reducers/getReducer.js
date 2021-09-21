import { GET_POSTS, GET_SINGLE_POST } from "../actions/types";
const initialState = {
  items: [],
  item: {},
};
export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_SINGLE_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
