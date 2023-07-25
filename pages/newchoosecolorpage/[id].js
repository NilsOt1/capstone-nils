import { useRouter } from "next/router";
import MainColor from "@/components/MainColor";
import styled from "styled-components";
import { StyledContainer } from "@/components/SuggestedColor/styles";
import SuggestedColor from "@/components/SuggestedColor";
import Button from "@/components/Button";

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 20% 1fr;
  gap: 10px;
`;
export const StyledInputSpan = styled.span`
  grid-area: 2 / 1 / 3 / 4;
`;

export default function NewChooseColorPage({ rooms, handleSetColor }) {
  const router = useRouter();
  const { id } = router.query;

  const currentRoom = rooms.find((room) => room.id === id);
  if (!currentRoom) {
    return null;
  }

  if (
    !currentRoom.colors ||
    !currentRoom.colors.color1 ||
    !currentRoom.colors.color2 ||
    !currentRoom.colors.color3
  ) {
    return null;
  }

  function handleGoBack() {
    router.back();
  }

  return (
    <>
      <StyledMain>
        <Button type="button" onClick={handleGoBack} text="back" />
        <StyledInputSpan>
          <MainColor
            colors={currentRoom.colors}
            handleSetColor={handleSetColor}
            id={id}
          />
        </StyledInputSpan>
      </StyledMain>
      <StyledContainer>
        <SuggestedColor color={currentRoom.colors.color1}></SuggestedColor>
        <SuggestedColor color={currentRoom.colors.color2}></SuggestedColor>
        <SuggestedColor color={currentRoom.colors.color3}></SuggestedColor>
      </StyledContainer>
    </>
  );
}
