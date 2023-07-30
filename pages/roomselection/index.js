import NewRoomForm from "@/components/AddNewRoom/Form";
import RoomsList from "@/components/RoomsList";
import { useState } from "react";
import { CustomNewRoomButton, StyledHeading } from "./styles";

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
      <StyledHeading>Rooms</StyledHeading>

      {showRoomForm ? (
        <>
          <NewRoomForm
            onCreateRoom={handleCreateRoom}
            handleFormClose={handleFormClose}
          />
        </>
      ) : (
        <CustomNewRoomButton onClick={handleNewRoomClick} type="button">
          New Room
        </CustomNewRoomButton>
      )}
      <RoomsList rooms={rooms} handleDeleteRoom={handleDeleteRoom} />
    </>
  );
}
