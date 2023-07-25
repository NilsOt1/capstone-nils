import { useRouter } from "next/router";
import MainColor from "@/components/MainColor";
import styled from "styled-components";
import { StyledContainer } from "@/components/SuggestedColor/styles";
import SuggestedColor from "@/components/SuggestedColor";
import OnClickButton from "@/components/OnClickButton";
import { Button, notification, Space } from "antd";

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

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "How to ColorUP",
      duration: "12",
      description:
        "It's a piece of cake. You simply choose three colors that are very prominent in your room or that frequently appear in your room, and then press the button.",
    });
  };

  return (
    <>
      <StyledRoomTitle>{currentRoom.name}</StyledRoomTitle>
      <StyledMain>
        {contextHolder}

        <StyledButtonContainer>
          <Space>
            <Button onClick={() => openNotificationWithIcon("info")}>i</Button>{" "}
          </Space>
        </StyledButtonContainer>

        <OnClickButton type="button" onClick={handleGoBack} text="back" />
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
