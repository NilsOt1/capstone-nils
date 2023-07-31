import { useRouter } from "next/router";
import { useState } from "react";
import MainColor from "@/components/MainColor";
import styled from "styled-components";
import { StyledContainer } from "@/components/SuggestedColor/styles";
import SuggestedColor from "@/components/SuggestedColor";
import { StyledButton } from "@/components/OnClickButton";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

const InfoText = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};

  &::before {
    content: "x";
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const InfoButton = styled.button`
  border: solid 0.5px;
  border-radius: 30px;
  height: 60px;
  width: 60px;
  font-size: 1.5em;
  font-weight: 300;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const StyledButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 20px 0 0;
`;

const StyledRoomTitle = styled.div`
  text-align: center;
  font-size: 3.3em;
  margin-top: 40px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomBackButton = styled(StyledButton)`
  margin: 5px 10px;
  border: solid 0.5px;
  border-radius: 30px;
  height: 60px;
  width: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledRandomButton = styled(StyledButton)`
  border: solid 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
`;

export default function NewChooseColorPage({
  rooms,
  handleSetColor,
  randomColor,
  handleRandomClick,
}) {
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
          <CustomBackButton type="button" onClick={handleGoBack}>
            <Icon path={mdiArrowLeft} size={1.1} />
          </CustomBackButton>
          <StyledRandomButton onClick={handleRandomClick}>
            Inspiration
          </StyledRandomButton>
          <InfoButton onClick={handleToggleInfo}>i</InfoButton>
        </StyledButtonContainer>
        <MainColor
          colors={currentRoom.colors}
          handleSetColor={handleSetColor}
          id={id}
        />
      </StyledMain>
      <StyledContainer>
        <SuggestedColor
          color={currentRoom.colors.color1}
          randomColor={randomColor}
        ></SuggestedColor>
        <SuggestedColor
          color={currentRoom.colors.color2}
          randomColor={randomColor}
        ></SuggestedColor>
        <SuggestedColor
          color={currentRoom.colors.color3}
          randomColor={randomColor}
        ></SuggestedColor>
      </StyledContainer>
    </>
  );
}
