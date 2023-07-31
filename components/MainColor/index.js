import { useState } from "react";
import {
  StyledColorInput,
  StyledDiv,
  StyledColorLabel,
  StyledMainColorForm,
  StyledColorMeButton,
  StyledContainer,
} from "./styles";

export default function MainColor({ colors, id, handleSetColor }) {
  const [selectedColors, setSelectedColors] = useState(colors);

  function handleChangeColor(event) {
    setSelectedColors({
      ...selectedColors,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSetColor(id, selectedColors);
  }

  return (
    <StyledMainColorForm onSubmit={handleSubmit}>
      {Object.keys(colors).map((color, index) => {
        return (
          <StyledColorLabel key={index + color} htmlFor={`input-${index}`}>
            <StyledColorInput
              type="color"
              id={`input-${id}`}
              name={color}
              value={selectedColors[color]}
              onChange={handleChangeColor}
            />
          </StyledColorLabel>
        );
      })}
      <StyledColorMeButton type="submit">Color Me!</StyledColorMeButton>
    </StyledMainColorForm>
  );
}
