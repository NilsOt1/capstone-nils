import { Fragment } from "react";
import { StyledInput, StyledDiv, StyledLabel } from "./styles";

export default function MainColor({ color, handleColorChange }) {
  const { color1, color2, color3 } = color;

  const colors = [
    { id: "color1", text: "Color1", name: "color1", gridArea: "1 / 1 / 2 / 2" },
    { id: "color2", text: "Color2", name: "color2", gridArea: "2 / 2 / 3 / 3" },
    { id: "color3", text: "Color3", name: "color3", gridArea: "1 / 3 / 2 / 4" },
  ];

  console.log(color);

  return (
    <StyledDiv>
      {colors.map(({ id, text, name, gridArea }) => (
        <Fragment key={id}>
          <StyledInput
            type="color"
            id={id}
            name={name}
            value={color[id]}
            onChange={(event) => handleColorChange(id, event.target.value)}
            gridArea={gridArea}
          />
          <StyledLabel htmlFor={id} gridArea={gridArea}>
            {text}
          </StyledLabel>
        </Fragment>
      ))}
    </StyledDiv>
  );
}
