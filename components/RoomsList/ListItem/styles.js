import styled from "styled-components";
import Link from "next/link";

export const StyledListItem = styled.li`
  list-style-type: none;
  border: 0.5px solid;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  margin: 5px;
  font-size: 1.3em;
`;

export const StyledRoomLink = styled(Link)`
  text-decoration: none;
  color: #4f4f4f;
`;

export const StyledDeleteButton = styled.button`
  margin: 5px;
  border: none;
  box-shadow: none;
`;

export const StyledRoomsContainer = styled.span`
  display: flex;
  align-items: center;
`;
