import { Fragment } from "react";
import styled from "styled-components";

export default function MainColor({ color, handleColorChange }) {
  const { color1, color2, color3 } = color;

  const colors = [
    { id: "color1", text: "Color1", name: "color1" },
    { id: "color2", text: "Color2", name: "color2" },
    { id: "color3", text: "Color3", name: "color3" },
  ];

  console.log(color);

  return (
    <StyledColors>
      <div>
        {colors.map(({ id, text, name }) => (
          <Fragment key={id}>
            <StyledLabel>
              <label htmlFor={id}>{text}</label>
            </StyledLabel>
            <input
              type="color"
              id={id}
              name={name}
              value={color[id]}
              onChange={(event) => handleColorChange(id, event.target.value)}
            />
          </Fragment>
        ))}
      </div>
    </StyledColors>
  );
}
const StyledLabel = styled.label`
  background-color: #abb5ac;
  padding: 5px;
`;
const StyledColors = styled.div`
  background-color: lightcoral;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
