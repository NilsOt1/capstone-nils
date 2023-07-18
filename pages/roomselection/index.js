import RoomSelectionForm from "@/components/RoomSelection/Form";
import List from "@/components/RoomList";
import { useState } from "react";
import Link from "next/link";

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
          <button onClick={handleFormClose}>Cancle</button>
        </>
      ) : (
        <button onClick={handleNewRoomClick}>New room</button>
      )}
      {minAmountOfRoomsReached && (
        <Link href="/choosecolorpage">Let`s go !</Link>
      )}
    </>
  );
}
