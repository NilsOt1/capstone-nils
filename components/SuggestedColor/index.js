import { StyledDiv } from "./styles";

export default function SuggestedColor({ text, color }) {
  return (
    <>
      <StyledDiv color={color}>{text}</StyledDiv>
    </>
  );
}
