import ListItem from "./ListItem";

export default function List({ rooms }) {
  return (
    <>
      <h1>Rooms</h1>
      <ul>
        <li id="1">Living room</li>
        {rooms.map((room) => {
          return <ListItem key={room.id}>{room.name}</ListItem>;
        })}
      </ul>
    </>
  );
}
