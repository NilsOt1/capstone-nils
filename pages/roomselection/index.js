import RoomSelectionForm from "@/components/RoomSelection/Form";
import List from "@/components/RoomList";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function RoomSelectionPage({
  rooms,
  handleCreateRoom,
  handleDeleteRoom,
}) {
  const [showRoomForm, setShowRoomForm] = useState(false);

  function handleNewRoomClick() {
    setShowRoomForm(true);
  }

  function handleFormClose() {
    setShowRoomForm(false);
  }

  const minAmountOfRoomsReached = rooms.length > 0;

  return (
    <>
      <List rooms={rooms} handleDeleteRoom={handleDeleteRoom} />
      {showRoomForm ? (
        <>
          <RoomSelectionForm onCreateRoom={handleCreateRoom} />
          <StyledCancleButton onClick={handleFormClose}>
            Cancle
          </StyledCancleButton>
        </>
      ) : (
        <StyledNewRoomButton onClick={handleNewRoomClick}>
          New room +
        </StyledNewRoomButton>
      )}
    </>
  );
}

const StyledNewRoomButton = styled.button`
  margin: 15px;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  height: 50px;
  width: 150px;
  font-size: 20px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLetsGoLink = styled(Link)`
  margin: auto;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  height: 60px;
  width: 200px;
  font-size: 20px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCancleButton = styled.button`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 50px auto;
  height: 30px;
  width: 75px;
  font-size: 18px;
`;
