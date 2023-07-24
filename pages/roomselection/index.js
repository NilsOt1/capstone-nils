import NewRoomForm from "@/components/AddNewRoom/Form";
import RoomsList from "@/components/RoomsList";
import { useState } from "react";
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
      <RoomsList rooms={rooms} handleDeleteRoom={handleDeleteRoom} />
      {showRoomForm ? (
        <>
          <NewRoomForm onCreateRoom={handleCreateRoom} />
          <StyledCancelButton onClick={handleFormClose}>
            Cancel
          </StyledCancelButton>
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

const StyledCancelButton = styled.button`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 50px auto;
  height: 30px;
  width: 75px;
  font-size: 18px;
`;
