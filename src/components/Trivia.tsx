import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../layouts/Layout";
import useFetch from "./useFetch";
import { getTriviaQuestions } from "../services/trivia";
import { TriviaQuestion } from "../types";
import { STATUSES } from "../reducers/fetchReducer";
import { UserContext } from "../context/UserContext";
import { actions } from "../reducers/userReducer";

interface Props extends RouteComponentProps {
  categoryId: number;
}

const Trivia: React.FC<Props> = (props) => {
  const [state, dispatch] = useContext(UserContext);

  const { data, status } = useFetch<Array<TriviaQuestion>>(() =>
    getTriviaQuestions({ category: props.categoryId, amount: 5 })
  );

  useEffect(() => {
    if (data && state.questions.length === 0) {
      dispatch(actions.setQuestions(data));
    }
  }, [data]);

  const { category } = state;

  return (
    <Layout>
      <h1>Trivia category: {category?.name}</h1>
      {status === STATUSES.loading ||
        (status === STATUSES.idle && <h3>Loading...</h3>)}
      {status === STATUSES.success && (
        <code>{JSON.stringify(state.questions, null, 2)}</code>
      )}
    </Layout>
  );
};

export default Trivia;
