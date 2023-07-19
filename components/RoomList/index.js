import ListItem from "./ListItem";
import styled from "styled-components";

export default function List({ rooms, handleDeleteRoom }) {
  return (
    <>
      <StyledHeading>Rooms</StyledHeading>
      <ul>
        {rooms.map((room) => {
          return (
            <ListItem
              key={room.id}
              room={room}
              handleDeleteRoom={handleDeleteRoom}
            >
              {room.name}
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}

const StyledHeading = styled.h1`
  text-align: center;
`;
