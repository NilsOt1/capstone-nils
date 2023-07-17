import RoomSelectionForm from "@/components/RoomSelection/Form";
import List from "@/components/RoomList";

export default function RoomSelectionPage({ handleCreateRoom, rooms }) {
  return (
    <>
      <List rooms={rooms} />
      <RoomSelectionForm onCreateRoom={handleCreateRoom} />
    </>
  );
}
