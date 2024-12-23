import styled, { css } from "styled-components";

/* css here used to make css code highlighting and if we remove it the code will run correctly 
but in other situations errors will appear so it is better to keep it in our code */

// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 600;
      font-size: 3rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 500;
      font-size: 3rem;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: 600;
      font-size: 3rem;
      text-align: center;
    `}
    
    line-height : 1.4;
`;

export default Heading;
