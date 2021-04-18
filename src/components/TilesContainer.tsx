import React, { FC, Children } from "react";
import { css } from "@emotion/react";

const tilesContainer = css`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
`;

const TilesContainer: FC = (props) => {
  return (
    <div css={tilesContainer}>
      {Children.map(props.children, (child) => {
        <div>{child}</div>;
      })}
    </div>
  );
};

export default TilesContainer;
