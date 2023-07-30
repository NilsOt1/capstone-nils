import Link from "next/link";
import styled from "styled-components";
import { Roboto } from "@next/font/google";

export default function HomePage() {
  return (
    <StyledContainer>
      <StyledHeading>
        Color<StyledUp>U</StyledUp>p
      </StyledHeading>
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
  background-image: url(/images/markus-spiske.jpg);
  background-size: 375px 737px;
  background-position: center -70px;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const StyledHeading = styled.h1`
  margin-top: 50px;
  font-weight: 100;
  font-size: 4em;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  margin-bottom: 10px;
  margin-top: 150px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: solid 0.5px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  color: #4f4f4f;

  text-decoration: none;
  height: 60px;
  width: 200px;
  font-size: 30px;
  background-color: transparent;
`;

const StyledUp = styled.span`
  font-size: 80px;
  margin-left: 50px;
`;
