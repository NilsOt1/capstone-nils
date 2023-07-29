import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily};
    background-image: url(/images/markus-spiske.jpg);
    background-size: 375px 697px;
    background-position: center -30px;
    background-repeat: no-repeat;
    background-color: transparent;
    color: #404040;
    height: 100vh;
  }
`;
