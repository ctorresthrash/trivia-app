import React from "react";
import { Router } from "@reach/router";
import { Global, css } from "@emotion/react";
import UserForm from "../pages/UserForm";
import { UserContextProvider } from "../context/UserContext";
import Categories from "../pages/Categories";
import ProtectedRoute from "./ProtectedRoute";
import Trivia from "./Trivia";

const globalCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  /* More info: https://bit.ly/2PsCnzk */
  html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 14px;
    line-height: 1.4;

    @media (min-width: calc(550px + 10vw)) {
      font-size: 18px;
    }

    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #222;
    line-height: 1.1;

    + * {
      margin-top: 0.5rem;
    }
  }

  strong {
    color: #222;
  }

  li {
    margin-top: 0.25rem;
  }
`;

function App() {
  return (
    <React.StrictMode>
      <Global styles={globalCss} />
      <UserContextProvider>
        <Router>
          <UserForm path="/" />
          <ProtectedRoute
            Component={Categories}
            Shared={UserForm}
            path="/trivia/categories"
          />
          <ProtectedRoute
            Component={Trivia}
            Shared={UserForm}
            path="/trivia/categories/:categoryId"
          />
        </Router>
      </UserContextProvider>
    </React.StrictMode>
  );
}

export default App;
