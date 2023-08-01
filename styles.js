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
    background-image: url(/images/markus-spiske11.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: transparent;
    color: #4f4f4f;
    }

    button, input {
    font-family: ${roboto.style.fontFamily};
    font-weight: 100;
    background-color: transparent;
    color: #4f4f4f;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: solid 0.5px;
    border-radius: 10px;
    text-decoration: none;


  }
`;
