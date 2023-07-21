import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useLocalStorageState("rooms", {
    defaultValue: [
      {
        name: "Living room",
        id: "1",
        colors: [{ color1: "#C33737", color2: "#4287A9", color3: "#2F933A" }],
      },
    ],
  });

  const [color, setColor] = useLocalStorageState("colors", {
    defaultValue: { color1: "#C33737", color2: "#4287A9", color3: "#2F933A" },
  });

  function handleSetColor(id, colors) {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, colors: colors } : room
      )
    );
  }

  function handleColorChange(id, value) {
    console.log(value);
    setColor((prevColor) => ({
      ...prevColor,
      [id]: value,
    }));
  }

  function handleCreateRoom(newRoom) {
    if (rooms.length < 5) {
      newRoom = { ...newRoom, id: uid() };
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
        color={color}
        handleColorChange={handleColorChange}
        rooms={rooms}
        handleCreateRoom={handleCreateRoom}
        handleDeleteRoom={handleDeleteRoom}
        handleSetColor={handleSetColor}
      />
    </>
  );
}
