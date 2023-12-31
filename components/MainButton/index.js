import styled from "styled-components";

export default function MainButton({ type, children, onClick }) {
  return (
    <>
      <StyledButton type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  text-decoration: none;
`;
