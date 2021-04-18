import React, { createContext, useReducer, Dispatch, useEffect } from "react";
import userReducer, {
  initialState,
  UserReducerAction,
  UserState,
} from "../reducers/userReducer";

export const UserContext = createContext<
  [UserState, Dispatch<UserReducerAction>]
>([initialState, () => {}]);

export const UserContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    localStorage.setItem("userState", JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
