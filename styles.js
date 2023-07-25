import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default createGlobalStyle`

  :root {
    --background-color: #fff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily};
  }
`;
