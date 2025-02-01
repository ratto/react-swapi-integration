import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.PEOPLE_SUCCESS: {
      return {
        ...state,
        people: action.people,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
