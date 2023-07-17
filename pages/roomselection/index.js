import RoomSelectionForm from "@/components/RoomSelection/Form";
import List from "@/components/RoomList";
import { useState } from "react";

export default function RoomSelectionPage({ handleCreateRoom, rooms }) {
  const [showRoomForm, setShowRoomForm] = useState(false);

  function handleNewRoomClick() {
    setShowRoomForm(true);
  }

  function handleFormClose() {
    setShowRoomForm(false);
  }
  console.log(rooms);
  return (
    <>
      <List rooms={rooms} />
      {showRoomForm ? (
        <>
          <RoomSelectionForm onCreateRoom={handleCreateRoom} />
          <button onClick={handleFormClose}>Cancle</button>
        </>
      ) : (
        <button onClick={handleNewRoomClick}>New room</button>
      )}
    </>
  );
}
