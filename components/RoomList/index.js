import ListItem from "./ListItem";

export default function List({ rooms, handleDeleteRoom }) {
  return (
    <>
      <h1>Rooms</h1>
      <ul>
        {rooms.map((room) => {
          return (
            <ListItem
              key={room.id}
              room={room}
              handleDeleteRoom={handleDeleteRoom}
            >
              {room.name}
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}
