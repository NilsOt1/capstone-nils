import { useRouter } from "next/router";
import MainColor from "@/components/MainColor";
import styled from "styled-components";
import SuggestedColor from "@/components/SuggestedColor";
import ButtonBar from "@/components/ButtonBar";

export default function ColorPage({
  rooms,
  handleSetColor,
  inspirationColor,
  handleInspirationClick,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentRoom = rooms.find((room) => room.id === id);

  return (
    <>
      <StyledRoomTitle>{currentRoom.name}</StyledRoomTitle>
      <ButtonBar handleInspirationClick={handleInspirationClick} />
      <MainColor
        colors={currentRoom.colors}
        handleSetColor={handleSetColor}
        id={id}
      />
      <StyledSuggestionsContainer>
        <SuggestedColor
          color={currentRoom.colors.color1}
          inspirationColor={inspirationColor}
        ></SuggestedColor>
        <SuggestedColor
          color={currentRoom.colors.color2}
          inspirationColor={inspirationColor}
        ></SuggestedColor>
        <SuggestedColor
          color={currentRoom.colors.color3}
          inspirationColor={inspirationColor}
        ></SuggestedColor>
      </StyledSuggestionsContainer>
    </>
  );
}

const StyledRoomTitle = styled.h1`
  font-weight: 100;
  text-align: center;
  font-size: 3.3em;
  margin-top: 40px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;

const StyledSuggestionsContainer = styled.span`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;
