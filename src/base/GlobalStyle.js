import { Global } from "@emotion/react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

// Обнуление
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
  /* height: 100%; */
   min-height: 100vh;
   display: flex;
   flex-direction: column;
 /* overflow: hidden; */
  
}

// Класс для всей страницы
// .app {
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// overflow: hidden;
// }

main {
  flex: 1 1 auto;
}

// Технический класс для фоновых картинок
/* ._ibg {
  position: relative;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
} */

`;
