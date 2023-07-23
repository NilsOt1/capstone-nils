import { useState } from "react";
import {
  StyledInput,
  StyledDiv,
  StyledLabel,
  StyledButton,
  StyledForm,
} from "./styles";

export default function MainColor({ colors, id, handleSetColor }) {
  const [selectedColors, setSelectedColors] = useState(colors);

  function handleChange(event) {
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
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        {Object.keys(colors).map((color, index) => {
          return (
            <StyledLabel key={index + color} htmlFor={`input-${index}`}>
              <StyledInput
                type="color"
                id={`input-${id}`}
                name={color}
                value={selectedColors[color]}
                onChange={handleChange}
              />
            </StyledLabel>
          );
        })}
        <StyledButton type="submit">set colors</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}
