import NewRoomForm from "@/components/AddNewRoom/Form";
import RoomsList from "@/components/RoomsList";
import { useState } from "react";
import { StyledHeading } from "./styles";
import OnClickButton from "@/components/OnClickButton";

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
      <RoomsList rooms={rooms} handleDeleteRoom={handleDeleteRoom} />
      {showRoomForm ? (
        <>
          <NewRoomForm
            onCreateRoom={handleCreateRoom}
            handleFormClose={handleFormClose}
          />
        </>
      ) : (
        <OnClickButton onClick={handleNewRoomClick} type="button">
          New Room
        </OnClickButton>
      )}
    </>
  );
}
