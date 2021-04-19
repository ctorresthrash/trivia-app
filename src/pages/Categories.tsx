import React, { useContext } from "react";
import { navigate } from "@reach/router";
import Layout from "../layouts/Layout";
import { TriviaCategory } from "../types";
import useFetch from "../components/useFetch";
import { getTriviaCategories } from "../services/trivia";
import { STATUSES } from "../reducers/fetchReducer";
import TriviaCategoryCard from "../components/TriviaCategoryCard";
import { UserContext } from "../context/UserContext";
import { actions } from "../reducers/userReducer";
import { RouteComponentProps } from "@reach/router";
import TilesContainer from "../components/TilesContainer";
import useRedirectTo from "../components/useRedirectTo";

interface Props extends RouteComponentProps {}

const Categories: React.FC<Props> = (props) => {
  const [state, dispatch] = useContext(UserContext);
  const { category } = state;
  const hasCategory = Boolean(category);
  const categoryPath = hasCategory ? `/trivia/categories/${category?.id}` : "";
  useRedirectTo(hasCategory, categoryPath);

  const { status, data, error } = useFetch<TriviaCategory[]>(() =>
    getTriviaCategories()
  );

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
            <TriviaCategoryCard
              key={category.id}
              category={category}
              onClick={onClickCategory}
            />
          ))}
        </TilesContainer>
      )}
    </Layout>
  );
};

export default Categories;
