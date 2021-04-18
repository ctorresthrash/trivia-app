import { css } from "@emotion/react";
import React, { FC } from "react";
import { TriviaCategory } from "../types";
import Card from "./Card";

interface Props {
  category: TriviaCategory;
  onClick: (category: TriviaCategory) => void;
}

const cardCss = css`
  width: 250px;
  height: 150px;
`;

const TriviaCategoryCard: FC<Props> = ({ category, onClick }) => {
  const onClickCategory = () => {
    onClick(category);
  };
  return (
    <Card css={cardCss} onClick={onClickCategory}>
      <h2>{category.name}</h2>
    </Card>
  );
};

export default TriviaCategoryCard;
