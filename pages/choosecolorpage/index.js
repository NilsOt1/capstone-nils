import MainColor from "@/components/MainColor";
import Link from "next/link";
import styled from "styled-components";
import { StyledContainer } from "@/components/SuggestedColor/styles";
import BackButton from "@/components/BackButton";
import SuggestedColor from "@/components/SuggestedColor";

const StyledLink = styled(Link)`
  text-align: center;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  height: 60px;
  width: 200px;
  font-size: 20px;
  background-color: #e6e6e6;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;

export default function ChooseColor({ color, handleColorChange, rooms }) {
  return (
    <>
      <StyledMain>
        <BackButton />
        <MainColor color={color} handleColorChange={handleColorChange} />
        <StyledLink href="/suggestionpage">Color Me!</StyledLink>
      </StyledMain>
      <StyledContainer>
        <SuggestedColor color={color.color1}>Color Suggestion 1</SuggestedColor>
        <SuggestedColor color={color.color2}>Color Suggestion 2</SuggestedColor>
      </StyledContainer>
    </>
  );
}
