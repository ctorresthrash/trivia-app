import { css } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { Form, Formik } from "formik";
import React, { FC, useContext } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Card from "../components/Card";
import { User } from "../types";
import { UserContext } from "../context/UserContext";
import { actions } from "../reducers/userReducer";

interface Props extends RouteComponentProps {}

const initialValues: User = {
  firstName: "",
  lastName: "",
  email: "",
};

const containerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  width: 100vw;
  height: 100vh;
`;

const cardCss = css`
  max-width: 500px;
`;

interface Props extends RouteComponentProps {}

const UserForm: FC<RouteComponentProps> = (props) => {
  const [, dispatch] = useContext(UserContext);

  const handleSubmit = (values: User) => {
    dispatch(actions.setUser(values));
  };

  return (
    <div css={containerCss}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Card css={cardCss}>
          <h1>Please, fill in this form</h1>
          <Form>
            <TextInput
              id="firstName"
              name="firstName"
              placeholder="John"
              label="First Name"
            />
            <TextInput
              id="lastName"
              name="lastName"
              placeholder="Doe"
              label="Last Name"
            />
            <TextInput
              id="email"
              name="email"
              placeholder="john@doe.com"
              label="Email"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Card>
      </Formik>
    </div>
  );
};

export default UserForm;