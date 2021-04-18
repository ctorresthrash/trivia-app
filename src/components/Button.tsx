import React, { HTMLProps } from "react";
import { css } from "@emotion/react";

interface Props extends HTMLProps<HTMLButtonElement> {
}

const buttonCss = css`
  box-shadow: 2px 2px 5px -1px #3dc21b;
  background-color: #44c767;
  border-radius: 19px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  padding: 13px 33px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #0a0a0a;

  &:hover {
    background-color: #5cbf2a;
  }
`;

function Button({ children, onClick }: Props) {
  return (
    <button css={buttonCss} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
