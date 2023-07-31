import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";
import {
  StyledRoomsContainer,
  StyledDeleteButton,
  StyledRoomLink,
  StyledListItem,
} from "./styles";

export default function ListItem({ room, children, handleDeleteRoom }) {
  function handleDeleteClick() {
    confirmAlert({
      message: "Are you sure you want to delete this room?",
      buttons: [
        {
          label: "Yes",

          onClick: () => {
            handleDeleteRoom(room.id);
          },
        },
        {
          label: "No, I`m not",
        },
      ],
    });
  }
  return (
    <StyledRoomsContainer>
      <StyledDeleteButton onClick={handleDeleteClick}>
        <Icon path={mdiDeleteOutline} size={1.3} weight={100} />
      </StyledDeleteButton>
      <StyledRoomLink href={`/newchoosecolorpage/${room.id}`}>
        <StyledListItem>{children}</StyledListItem>
      </StyledRoomLink>
    </StyledRoomsContainer>
  );
}
