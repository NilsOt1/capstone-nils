import { StyledButtonNextPage } from "./styles";
import { StyledContainer } from "./styles";

export default function ButtonNextPage({ text }) {
  return (
    <>
      <StyledContainer>
        <StyledButtonNextPage type="type">{text}</StyledButtonNextPage>
      </StyledContainer>
    </>
  );
}
