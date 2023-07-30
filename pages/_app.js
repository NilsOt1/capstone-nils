import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";

const randomColorArray = [
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
  const [rooms, setRooms] = useLocalStorageState("rooms", {
    defaultValue: [],
  });

  const [randomColor, setRandomColor] = useState(null);

  function handleSetColor(id, colors) {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, colors: colors } : room
      )
    );
    setRandomColor("");
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

  function getRandomColor() {
    const randomPick = Math.floor(Math.random() * randomColorArray.length);
    return randomColorArray[randomPick];
  }

  function handleRandomClick() {
    const randomisedColor = getRandomColor();
    setRandomColor(randomisedColor);
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
        randomColor={randomColor}
        handleRandomClick={handleRandomClick}
      />
    </>
  );
}
