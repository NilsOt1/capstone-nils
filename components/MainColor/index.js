import { StyledInput, StyledDiv, StyledLabel } from "./styles";

export default function MainColor({ color, handleColorChange, disabled }) {
  const MainColors = [
    { id: "color1", text: "Color1", name: "color1" },
    { id: "color2", text: "Color2", name: "color2" },
    { id: "color3", text: "Color3", name: "color3" },
  ];

  return (
    <StyledDiv>
      {MainColors.map(({ id, text, name }) => (
        <StyledLabel key={id} htmlFor={id}>
          {text}
          <StyledInput
            type="color"
            id={id}
            name={name}
            value={color[id]}
            onChange={(event) => handleColorChange(id, event.target.value)}
            disabled={disabled}
          />
        </StyledLabel>
      ))}
    </StyledDiv>
  );
}
