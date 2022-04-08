import { css } from '@emotion/react';
import { breakpoints, sizes } from '../config/_config';
export const Button = (props) => {
  return (
    <>
      <button css={buttonStyle} type="button">
        {props.children}
      </button>
    </>
  );
};

const buttonStyle = css`
  color: #fff;
  background-color: palevioletred;
  width: 200px;
  height: 50px;
  ${breakpoints.md} {
    background-color: red;
  }
`;
