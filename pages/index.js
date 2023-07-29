import Link from "next/link";
import styled from "styled-components";
import { Roboto } from "@next/font/google";

export default function HomePage() {
  return (
    <StyledContainer>
      <StyledHeading>ColorUp</StyledHeading>
      <StyledLink href="/roomselection">Let`s Go!</StyledLink>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledHeading = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 3.5em;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: solid 0.5px;
  border-radius: 30px;
  text-decoration: none;
  height: 60px;
  width: 200px;
  font-size: 30px;
  background-color: transparent;
`;
