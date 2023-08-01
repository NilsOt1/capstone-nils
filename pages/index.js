import Link from "next/link";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(/images/markus-spiske.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledHeading = styled.h1`
  font-weight: 100;
  font-size: 4em;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  margin-bottom: 10px;
  margin-top: 300px;
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
`;

const StyledUp = styled.span`
  font-size: 80px;
  margin-left: 30px;
  /* color: #fff; */

  @media (min-width: 768px) {
    color: #fff;
  }
`;

export default function HomePage() {
  return (
    <StyledContainer>
      <StyledHeading>
        Color<StyledUp>Up</StyledUp>
      </StyledHeading>
      <StyledLink href="/roomselection">Let`s Go!</StyledLink>
    </StyledContainer>
  );
}
