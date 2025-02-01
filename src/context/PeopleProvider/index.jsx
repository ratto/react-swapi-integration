import P from "prop-types";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { data } from "./data";
import PeopleContext from "./context";

const PeopleProvider = ({ children }) => {
  const [peopleState, peopleDispatch] = useReducer(reducer, data);

  return (
    <PeopleContext.Provider value={{ peopleState, peopleDispatch }}>
      {children}
    </PeopleContext.Provider>
  );
};

PeopleProvider.propTypes = {
  children: P.node.isRequired,
};

export default PeopleProvider;
