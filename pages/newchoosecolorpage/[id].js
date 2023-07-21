import { useRouter } from "next/router";
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

export default function NewChooseColorPage({ rooms, handleSetColor }) {
  const router = useRouter();
  const { id } = router.query;

  const currentRoom = rooms.find((room) => room.id === id);
  if (!currentRoom) {
    return;
  }

  return (
    <>
      <StyledMain>
        <BackButton />
        <MainColor
          colors={currentRoom.colors}
          handleSetColor={handleSetColor}
          id={id}
        />
        <StyledLink href="/suggestionpage">Color Me!</StyledLink>
      </StyledMain>
      <StyledContainer>
        <SuggestedColor
          key={currentRoom.colors.color1}
          color={currentRoom.colors.color1}
        >
          Color Suggestion 1: {currentRoom.colors.color1}
        </SuggestedColor>
        <SuggestedColor
          key={currentRoom.colors.color2}
          color={currentRoom.colors.color2}
        >
          Color Suggestion 2: {currentRoom.colors.color2}
        </SuggestedColor>
        <SuggestedColor
          key={currentRoom.colors.color3}
          color={currentRoom.colors.color3}
        >
          Color Suggestion 3: {currentRoom.colors.color3}
        </SuggestedColor>
        )
      </StyledContainer>
    </>
  );
}
