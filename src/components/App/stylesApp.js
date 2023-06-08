import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

export const SAppContainer = styled.div`
  background-color: var(--color-blue);
  background-image: linear-gradient(90deg, var(--color-deep-blue), var(--color-blue));
  background: linear-gradient(90deg, var(--color-deep-brown), var(--color-deep-blue), var(--color-blue));
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media (min-width: 800px) {
    padding: 30px;
  }
`;
export const SGlobal = styled(Global);

<Global
  styles={css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: 0;
    }

    nav,
    footer,
    header,
    aside {
      display: block;
    }

    input,
    button,
    textarea {
      font-family: inherit;
    }

    .input::-ms-clear {
      display: none;
    }

    button {
      cursor: pointer;
    }

    button::-moz-focus-inner {
      padding: 0;
      border: 0;
    }

    a,
    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }

    ul,
    ol,
    li {
      list-style: none;
    }

    img {
      vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: inherit;
      font-style: inherit;
    }

    html,
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1 1 auto;
    }
  `}
/>;
