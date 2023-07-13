import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [color, setColor] = useState({
    color1: "#C33737",
    color2: "#4287A9",
    color3: "#2F933A",
  });
  function handleColorChange(id, value) {
    setColor((prevColor) => ({
      ...prevColor,
      [id]: value,
    }));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        color={color}
        handleColorChange={handleColorChange}
      />
    </>
  );
}
