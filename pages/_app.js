import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";

const inspirationColorArray = [
  "#568A5C",
  "#8d9a5b",
  "#6c705c",
  "#B46B4B",
  "#5d7e83",
  "#824f4f",
  "#c2b76e",
  "#7a9c9e",
  "#E2D283",
  "#b5b9a6",
];

export default function App({ Component, pageProps }) {
  const [inspirationColor, setInspirationColor] = useState(null);
  const [rooms, setRooms] = useLocalStorageState("rooms", {
    defaultValue: [],
  });

  function handleSetColor(id, colors) {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, colors: colors } : room
      )
    );
    setInspirationColor("");
  }

  function handleCreateRoom(newRoom) {
    if (rooms.length < 5) {
      newRoom = {
        ...newRoom,
        id: uid(),
        colors: { color1: "#A47156", color2: "#A47156", color3: "#A47156" },
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

  function getInspirationColor() {
    const randomPick = Math.floor(Math.random() * inspirationColorArray.length);
    return inspirationColorArray[randomPick];
  }

  function handleInspirationClick() {
    const inspirationalColor = getInspirationColor();
    setInspirationColor(inspirationalColor);
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
        handleInspirationClick={handleInspirationClick}
        inspirationColor={inspirationColor}
      />
    </>
  );
}
