import NewRoomForm from "@/components/AddNewRoom";
import RoomsList from "@/components/RoomsList";
import { useState } from "react";
import { StyledButton } from "@/components/OnClickButton";
import styled from "styled-components";

const StyledRoomsHeading = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: 3.5em;
  margin: 50px 0px 20px 0px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;

const CustomNewRoomButton = styled(StyledButton)`
  margin-top: 40px;
  height: 60px;
  width: 180px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.5em;
  font-weight: 100;
  border: solid 1px;
`;

export default function RoomSelectionPage({
  rooms,
  handleCreateRoom,
  handleDeleteRoom,
}) {
  const [showRoomForm, setShowRoomForm] = useState(false);

  function handleNewRoomClick() {
    setShowRoomForm(true);
  }
  function handleFormClose() {
    setShowRoomForm(false);
  }

  return (
    <>
      <StyledRoomsHeading>Rooms</StyledRoomsHeading>

      {showRoomForm ? (
        <>
          <NewRoomForm
            onCreateRoom={handleCreateRoom}
            handleFormClose={handleFormClose}
          />
        </>
      ) : (
        <CustomNewRoomButton onClick={handleNewRoomClick} type="button">
          New Room
        </CustomNewRoomButton>
      )}
      <RoomsList rooms={rooms} handleDeleteRoom={handleDeleteRoom} />
    </>
  );
}
