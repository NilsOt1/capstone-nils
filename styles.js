import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
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
    font-weight: 100;
    background-image: url(/images/markus-spiske2.jpg);
    background-size: 375px 667px;
    background-repeat: no-repeat;
    background-color: transparent;
    color: #4f4f4f;
    }

    button, input {
    font-family: ${roboto.style.fontFamily};
    background-color: transparent;
  }
`;
