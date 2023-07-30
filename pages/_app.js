import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useLocalStorageState("rooms", {
    defaultValue: [],
  });

  function handleSetColor(id, colors) {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, colors: colors } : room
      )
    );
  }

  function handleCreateRoom(newRoom) {
    if (rooms.length < 5) {
      newRoom = {
        ...newRoom,
        id: uid(),
        colors: { color1: "#fff", color2: "#fff", color3: "#fff" },
      };
      setRooms([newRoom, ...rooms]);
    } else {
      alert("Sorry, there are only five rooms to color");
    }
  }

  function handleDeleteRoom(roomId) {
    const updatedRooms = rooms.filter((room) => room.id !== roomId);
    setRooms(updatedRooms);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        rooms={rooms}
        handleCreateRoom={handleCreateRoom}
        handleDeleteRoom={handleDeleteRoom}
        handleSetColor={handleSetColor}
      />
    </>
  );
}
