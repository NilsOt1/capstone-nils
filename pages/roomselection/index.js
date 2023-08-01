import NewRoomForm from "@/components/NewRoomForm";
import RoomsList from "@/components/RoomsList";
import { useState } from "react";
import { StyledButton } from "@/components/MainButton";
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

  return (
    <>
      <StyledRoomsHeading>Rooms</StyledRoomsHeading>

      {showRoomForm ? (
        <>
          <NewRoomForm
            onCreateRoom={handleCreateRoom}
            handleFormClose={handleFormClose}
          />
        </>
      ) : (
        <StyledNewRoomButton onClick={handleNewRoomClick} type="button">
          New Room
        </StyledNewRoomButton>
      )}
      <RoomsList rooms={rooms} handleDeleteRoom={handleDeleteRoom} />
    </>
  );
}

const StyledRoomsHeading = styled.h1`
  text-align: center;
  font-size: 3.5em;
  font-weight: 100;
  margin: 50px 0px 20px 0px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;

const StyledNewRoomButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  height: 60px;
  width: 180px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.5em;
  border: solid 1px;
`;
