import NewRoomForm from "@/components/AddNewRoom/Form";
import OnClickButton from "@/components/OnClickButton";
import RoomsList from "@/components/RoomsList";
import { useState } from "react";

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
          <OnClickButton
            onClick={handleFormClose}
            text="Cancel"
            type="button"
          />
        </>
      ) : (
        <OnClickButton
          onClick={handleNewRoomClick}
          text="New room"
          type="button"
        />
      )}
    </>
  );
}
