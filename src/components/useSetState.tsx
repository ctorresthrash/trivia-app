import { useReducer } from "react";

const reducer = (previousState: object = {}, updatedState: object = {}) => {
  return { ...previousState, ...updatedState };
};

const useSetState = (initialState: object) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = (updatedState: object) => dispatch(updatedState);

  return [state, setState];
};

export default useSetState;
