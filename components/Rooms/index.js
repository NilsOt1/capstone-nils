export default function Rooms({ rooms }) {
  return (
    <>
      <label htmlFor="rooms">Rooms</label>
      <select id="rooms">
        {rooms.map((room) => {
          return (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
