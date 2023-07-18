export default function ListItem({ room, children, handleDeleteRoom }) {
  function handleDeleteClick() {
    handleDeleteRoom(room.id);
  }
  return (
    <>
      <li>{children}</li>
      <button onClick={handleDeleteClick}>X</button>
    </>
  );
}
