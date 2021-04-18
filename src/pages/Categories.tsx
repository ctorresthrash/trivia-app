import React, { useContext } from "react";
import Layout from "../layouts/Layout";
import { TriviaCategory, User } from "../types";
import useAuthRedirect from "../components/useAuthRedirect";
import useFetch from "../components/useFetch";
import { getTriviaCategories } from "../services/trivia";
import { STATUSES } from "../reducers/fetchReducer";
import TriviaCategoryCard from "../components/TriviaCategoryCard";
import { UserContext } from "../context/UserContext";
import { actions } from "../reducers/userReducer";
import { RouteComponentProps } from "@reach/router";
import TilesContainer from "../components/TilesContainer";

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
        <TilesContainer>
          {data.map((category) => (
            <TriviaCategoryCard category={category} onClick={onClickCategory} />
          ))}
        </TilesContainer>
      )}
    </Layout>
  );
};

export default Categories;
