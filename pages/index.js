import MainColor from "@/components/MainColor";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  padding: 15px 40px;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  height: 70px;
  width: 250px;
  font-size: 20px;
  background-color: #bcbdbc;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;

export default function HomePage({ color, handleColorChange }) {
  return (
    <StyledContainer>
      <MainColor color={color} handleColorChange={handleColorChange} />
      <StyledLink href="/suggestions-page">Color Me!</StyledLink>
    </StyledContainer>
  );
}
