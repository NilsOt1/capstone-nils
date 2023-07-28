import { StyledSuggestion } from "./styles";
import tinycolor from "tinycolor2";
import { useState } from "react";

export default function SuggestedColor({ color }) {
  const rgbColor = tinycolor(color).toRgbString();
  const tinyColor = tinycolor(rgbColor);

  const splitcomplementColors = tinyColor.splitcomplement(30);

  const suggestedColors = splitcomplementColors.map((color) =>
    color.toHexString()
  );

  const [hexVisible, setHexVisible] = useState(false);

  function toggleColorInfo() {
    setHexVisible(!hexVisible);
  }

  return (
    <StyledSuggestion color={suggestedColors[1]} onClick={toggleColorInfo}>
      {hexVisible ? suggestedColors[1] : ""}
    </StyledSuggestion>
  );
}
