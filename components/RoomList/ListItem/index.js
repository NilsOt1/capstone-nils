import styled from "styled-components";

export default function ListItem({ room, children, handleDeleteRoom }) {
  function handleDeleteClick() {
    handleDeleteRoom(room.id);
  }
  return (
    <StyledSpan>
      <StyledDeleteButton onClick={handleDeleteClick}>X</StyledDeleteButton>
      <StyledListItem>{children}</StyledListItem>
    </StyledSpan>
  );
}

const StyledListItem = styled.li`
  list-style-type: none;
  border: 1px solid;
  border-radius: 30px;
  padding: 15px 30px;
  margin: 10px;
`;

const StyledDeleteButton = styled.button`
  margin: 10px 20px;
  padding: 20px;
  border: 1px;
  border-radius: 30px;
`;

const StyledSpan = styled.span`
  display: flex;
`;
