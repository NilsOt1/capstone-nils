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
`;
