import ListItem from "./ListItem";

export default function List({ rooms }) {
  return (
    <ul>
      {rooms.map((room) => {
        return <ListItem key={room.id}>{room.name}</ListItem>;
      })}
    </ul>
  );
}
