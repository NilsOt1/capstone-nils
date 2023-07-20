import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeading>ColorUp</StyledHeading>
      <StyledLink href="/roomselection">Let`s Go!</StyledLink>
    </>
  );
}

const StyledHeading = styled.h1`
  text-align: center;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  height: 60px;
  width: 200px;
  font-size: 20px;
  background-color: #e6e6e6;
`;
