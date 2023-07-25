import { StyledSuggestion } from "./styles";
import tinycolor from "tinycolor2";

export default function SuggestedColor({ children, color }) {
  const rgbColor = tinycolor(color).toRgbString();
  const tinyColor = tinycolor(rgbColor);

  const splitcomplementColors = tinyColor.splitcomplement(30);

  const suggestedColors = splitcomplementColors.map((color) =>
    color.toHexString()
  );

  return (
    <StyledSuggestion color={suggestedColors[1]}>{children}</StyledSuggestion>
  );
}
