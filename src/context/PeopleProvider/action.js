import axios from "axios";
import * as types from "./types";

export const loadPeople = async (dispatch) => {
  dispatch({ types: types.PEOPLE_LOADING });

  let allPeople = [];
  let nextPage = "https://swapi.dev/api/people";

  while (nextPage) {
    const response = await axios.get(nextPage);
    allPeople.push(...response.data.results);
    nextPage = response.data.next;
  }

  console.log(allPeople);

  dispatch({ type: types.PEOPLE_SUCCESS, people: allPeople });
};
