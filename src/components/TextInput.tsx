import React, { HTMLProps } from "react";
import { css } from "@emotion/react";
import { FieldHookConfig, useField } from "formik";

type Props = FieldHookConfig<string> & HTMLProps<HTMLInputElement>;

const inputCss = css`
  position: relative;
  display: block;

  input {
    z-index: 1;
    padding: 5px;
    font-size: 16px;
    border-width: 1px;
    border-color: #cccccc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: 8px;
    box-shadow: 0px 0px 3px rgba(66, 66, 66, 0.28);
    margin: 1rem 0;
    width: 100%;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translate(-10px, -1.6rem) scale(0.8);
    }

    &::placeholder {
      opacity: 0;
      color: #cccccc;
    }

    &:focus::placeholder {
      opacity: 1;
    }
  }

  label {
    font-family: sans-serif;
    position: absolute;
    left: 6px;
    top: 1.5rem;
    font-size: 1rem;
    transition: transform 200ms ease-in-out;
  }
`;

function TextInput({ label, ...props }: Props) {
  const [field, meta, helpers] = useField(props);
  return (
    <div css={inputCss}>
      <input {...field} {...props} />
      <label>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;
