import React, { FC, Children } from "react";
import { css } from "@emotion/react";

const tilesContainer = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
`;

const tileWrapper = css`
  flex: 1 1 auto;
  margin-bottom: 1rem;
`;

const TilesContainer: FC = (props) => {
  return (
    <div css={tilesContainer}>
      {Children.map(props.children, (child) => {
        return <div css={tileWrapper}>{child}</div>;
      })}
    </div>
  );
};

export default TilesContainer;
