import GlobalStyle from "../styles";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [color, setColor] = useState({
    color1: "#C33737",
    color2: "#4287A9",
    color3: "#2F933A",
  });
  function handleColorChange(id, value) {
    setColor((prevColor) => ({
      ...prevColor,
      [id]: value,
    }));
  }

  const [rooms, setRooms] = useLocalStorageState("rooms", {
    defaultValue: [{ name: "Living room", id: 1 }],
  });

  function handleCreateRoom(newRoom) {
    newRoom = { ...newRoom, id: uid() };
    setRooms([newRoom, ...rooms]);
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
      />
    </>
  );
}
