import styled from "styled-components";

export default function OnClickButton({ type, children, onClick }) {
  return (
    <>
      <StyledButton type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 0.5px;
  border-radius: 10px;
  text-decoration: none;
  height: 40px;
  width: 120px;
  font-size: 20px;
  color: #4f4f4f;
`;
