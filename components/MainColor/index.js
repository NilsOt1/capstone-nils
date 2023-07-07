import styled from "styled-components";

export default function MainColor({ text, id }) {
  return (
    <>
      <StyledLabel>
        <label htmlFor={id}>{text}</label>
      </StyledLabel>
      <input type="color" id={id} />
    </>
  );
}

const StyledLabel = styled.label`
  display: flex;
  margin: 10px;
`;
