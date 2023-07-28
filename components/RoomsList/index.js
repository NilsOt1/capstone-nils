import ListItem from "./ListItem";
import styled from "styled-components";

export default function RoomsList({ rooms, handleDeleteRoom }) {
  return (
    <>
      <StyledUl>
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
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  padding: 0;
  margin-left: 50px;
`;
