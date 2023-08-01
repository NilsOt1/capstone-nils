import ListItem from "./ListItem";
import styled from "styled-components";

export default function RoomsList({ rooms, handleDeleteRoom }) {
  return (
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
  );
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  padding: 0;
  margin-left: 20%;
  margin-top: 50px;

  @media (min-width: 510px) {
    margin-left: 30%;
  }
`;
