import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeading>ColorUp</StyledHeading>
      <Link href="/roomselection">Let`s Go!</Link>
    </>
  );
}

const StyledHeading = styled.h1`
  text-align: center;
  padding: 20px;
`;
