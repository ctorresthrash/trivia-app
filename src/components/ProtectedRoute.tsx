import { RouteComponentProps } from "@reach/router";
import React, { ComponentType, FC, useContext } from "react";
import { UserContext } from "../context/UserContext";

interface Props extends RouteComponentProps {
  Component: ComponentType<any>;
  Shared: ComponentType<any>;
}

const ProtectedRoute: React.FC<Props> = ({ Component, Shared, ...props }) => {
  const [state] = useContext(UserContext);
  if (state.user) {
    return <Component {...props} />;
  }

  return <Shared {...props} />;
};

export default ProtectedRoute;
