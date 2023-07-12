import styled from "styled-components";

export default function SuggestedColor({ text, color }) {
  return (
    <>
      <StyledDiv color={color}>
        <div>{text}</div>
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  display: grid;
`;
