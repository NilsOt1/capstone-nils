import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useLocalStorageState("rooms", {
    defaultValue: [],
  });

  const [roomCount, setRoomCount] = useState(0);

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

      newRoom.textColor = roomCount < 2 ? "#fff" : "#000";

      setRooms((prevRooms) => [...prevRooms, newRoom]);
      setRoomCount(roomCount + 1);
    } else {
      alert("Sorry, there are only five rooms to color");
    }
  }

  function handleDeleteRoom(roomId) {
    const updatedRooms = rooms.filter((room) => room.id !== roomId);
    setRooms(updatedRooms);
    setRoomCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
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
