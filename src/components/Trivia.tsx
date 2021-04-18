import { RouteComponentProps } from "@reach/router";
import React from "react";
import Layout from "../layouts/Layout";

const Trivia: React.FC<RouteComponentProps> = (props) => {
  return (
    <Layout>
      <h1>This is the trivia component</h1>
    </Layout>
  );
};

export default Trivia;
