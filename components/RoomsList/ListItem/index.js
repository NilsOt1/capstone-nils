import styled from "styled-components";
import Link from "next/link";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

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
    <StyledSpan>
      <StyledDeleteButton onClick={handleDeleteClick}>
        <Icon path={mdiDeleteOutline} size={1.3} weight={100} />
      </StyledDeleteButton>
      <StyledLink href={`/newchoosecolorpage/${room.id}`}>
        <StyledListItem>{children}</StyledListItem>
      </StyledLink>
    </StyledSpan>
  );
}

const StyledListItem = styled.li`
  list-style-type: none;
  border: 0.5px solid;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px 5px;
  font-size: 1.3em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const StyledDeleteButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: 1px;
  border-radius: 30px;
  background-color: #fff;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;
