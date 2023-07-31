import tinycolor from "tinycolor2";
import { useState } from "react";
import styled from "styled-components";

const StyledSuggestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.color};
  margin: 5px;
  width: 33%;
  height: 210px;
  border-radius: 10px;
`;

export default function SuggestedColor({ color, inspirationColor }) {
  const [hexVisible, setHexVisible] = useState(false);

  function toggleColorInfo() {
    setHexVisible(!hexVisible);
  }
  const rgbColor = tinycolor(color).toRgbString();
  const tinyColor = tinycolor(rgbColor);

  const splitcomplementColors = tinyColor.splitcomplement(30);

  const suggestedColors = splitcomplementColors.map((color) =>
    color.toHexString()
  );

  return (
    <StyledSuggestion
      color={inspirationColor ? inspirationColor : suggestedColors[1]}
      onClick={toggleColorInfo}
    >
      {hexVisible ? suggestedColors[1] : ""}
    </StyledSuggestion>
  );
}
