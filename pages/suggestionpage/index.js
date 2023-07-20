import SuggestedColor from "@/components/SuggestedColor";
import { StyledContainer } from "@/components/SuggestedColor/styles";
import MainColor from "@/components/MainColor";
import BackButton from "@/components/BackButton";

export default function SuggestionPage({ color, handleColorChange, rooms }) {
  return (
    <>
      <StyledContainer>
        <BackButton />
        <MainColor
          color={color}
          handleColorChange={handleColorChange}
          disabled
        />
        <SuggestedColor color={color.color1}>Color Suggestion 1</SuggestedColor>
        <SuggestedColor color={color.color2}>Color Suggestion 2</SuggestedColor>
      </StyledContainer>
    </>
  );
}
