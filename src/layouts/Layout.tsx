import React from "react";
import { css } from "@emotion/react";

const pageContainerCss = css`
  height: 100vh;
  padding: 1rem 2rem;
  margin: auto;
`;

const Trivia: React.FC = ({ children }) => {
  return <div css={pageContainerCss}>{children}</div>;
};

export default Trivia;
