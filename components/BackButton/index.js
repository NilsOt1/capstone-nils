import { useRouter } from "next/router";
import styled from "styled-components";

const StyledBackButton = styled.button`
  grid-area: 1 / 1 / 2 / 2;
  border: none;
  border-radius: 20px;
  width: 50px;
  height: 50px;
`;

export default function BackButton() {
  const router = useRouter();
  function handleGoBack() {
    router.back();
  }

  return <StyledBackButton onClick={handleGoBack}>⬅️</StyledBackButton>;
}
