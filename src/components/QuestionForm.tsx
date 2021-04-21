import React, { FC, useRef } from "react";
import { css } from "@emotion/react";
import { Formik, Field, Form, FormikErrors } from "formik";
import { TriviaQuestion, QuestionFormValues } from "../types";
import Button from "./Button";

interface Props {
  question: TriviaQuestion;
  onSubmit: (values: QuestionFormValues) => void;
}

const getInitialValues: (type: string) => QuestionFormValues = (type) => ({
  answer: "",
});

const validate = (values: QuestionFormValues) => {
  const errors: FormikErrors<QuestionFormValues> = {};
  if (!values.answer) {
    errors.answer = "Required";
  }
  return errors;
};

const containerCss = css`
  margin-top: 2rem;

  [role="group"] {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
    margin-bottom: 2rem;

    input[type="radio"] {
      margin-right: 0.5rem;
    }
  }
`;

const QuestionForm: FC<Props> = ({ question, onSubmit }) => {
  const answers = [...question.incorrect_answers];
  const randomIndex = useRef(
    Math.floor(Math.random() * question.incorrect_answers.length)
  ).current;
  answers.splice(randomIndex, 0, question.correct_answer);

  return (
    <Formik
      initialValues={getInitialValues(question.type)}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form css={containerCss}>
        <h3>{question.question}</h3>
        {question.type === "multiple" && (
          <div role="group" aria-labelledby="answer">
            {answers.map((answer) => (
              <label>
                <Field type="radio" name="answer" value={answer} />
                {answer}
              </label>
            ))}
          </div>
        )}
        <Button type="submit">Next Question</Button>
      </Form>
    </Formik>
  );
};

export default QuestionForm;
