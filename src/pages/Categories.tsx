import React, { useContext } from "react";
import Layout from "../layouts/Layout";
import { css } from "@emotion/react";
import { TriviaCategory, User } from "../types";
import useAuthRedirect from "../components/useAuthRedirect";
import useFetch from "../components/useFetch";
import { getTriviaCategories } from "../services/trivia";
import { STATUSES } from "../reducers/fetchReducer";
import TriviaCategoryCard from "../components/TriviaCategoryCard";
import { UserContext } from "../context/UserContext";
import { actions } from "../reducers/userReducer";
import { RouteComponentProps } from "@reach/router";

const categoriesContainerCss = css`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
`;

const Categories: React.FC<RouteComponentProps> = (props) => {
  useAuthRedirect((user: User) => !Boolean(user), "/");

  const { status, data, error } = useFetch<TriviaCategory[]>(
    getTriviaCategories()
  );

  const [, dispatch] = useContext(UserContext);

  const onClickCategory = (category: TriviaCategory) => {
    dispatch(actions.setCategory(category));
  };
  return (
    <Layout>
      <h1>This is the trivia component</h1>
      {status === STATUSES.loading && <div>Loading</div>}
      {status === STATUSES.success && data && (
        <div css={categoriesContainerCss}>
          {data.map((category) => (
            <TriviaCategoryCard category={category} onClick={onClickCategory} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Categories;
