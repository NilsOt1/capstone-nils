export default function RoomSelectionForm({ onCreateRoom }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    onCreateRoom(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new room</h2>
      <label htmlFor="roomName">
        Room Name
        <input type="text" id="name" name="name" required></input>
      </label>
      <button type="submit">Create room</button>
    </form>
  );
}
