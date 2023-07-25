import { useRouter } from "next/router";
import { useState } from "react";
import MainColor from "@/components/MainColor";
import styled from "styled-components";
import { StyledContainer } from "@/components/SuggestedColor/styles";
import SuggestedColor from "@/components/SuggestedColor";
import OnClickButton from "@/components/OnClickButton";

const InfoText = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};

  &::before {
    content: "x";
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    font-weight: bold;
  }
`;

const InfoButton = styled.button`
  background-color: #f0f0f0;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
`;

const StyledButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 20px 0 0;
`;

const StyledRoomTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px #adadad;
  border-radius: 10px;
  margin: 10px auto;
  height: 40px;
  width: 80%;
  font-size: 20px;
  background-color: #fff;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function NewChooseColorPage({ rooms, handleSetColor }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowInfo(true);

    setTimeout(() => {
      setShowInfo(false);
    }, 12000);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

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
      {showInfo && (
        <InfoText show={showInfo.toString()} onClick={handleCloseInfo}>
          How to ColorUP - It`s a piece of cake. You simply choose three colors
          that are very prominent in your room and then press the button.
        </InfoText>
      )}

      <StyledRoomTitle>{currentRoom.name}</StyledRoomTitle>
      <StyledMain>
        <StyledButtonContainer>
          <InfoButton onClick={handleToggleInfo}>i</InfoButton>
        </StyledButtonContainer>

        <OnClickButton type="button" onClick={handleGoBack} text="back" />
        <MainColor
          colors={currentRoom.colors}
          handleSetColor={handleSetColor}
          id={id}
        />
      </StyledMain>
      <StyledContainer>
        <SuggestedColor color={currentRoom.colors.color1}></SuggestedColor>
        <SuggestedColor color={currentRoom.colors.color2}></SuggestedColor>
        <SuggestedColor color={currentRoom.colors.color3}></SuggestedColor>
      </StyledContainer>
    </>
  );
}
