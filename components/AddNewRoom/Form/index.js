import styled from "styled-components";

export default function NewRoomForm({ onCreateRoom }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    onCreateRoom(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <StyledHeading>Add new room</StyledHeading>
      <StyledLabel htmlFor="roomName">
        Room Name
        <input type="text" id="name" name="name" required></input>
      </StyledLabel>
      <StyledCreateButton type="submit">Create room</StyledCreateButton>
    </form>
  );
}

const StyledHeading = styled.h2`
  text-align: center;
`;

const StyledCreateButton = styled.button`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  height: 60px;
  width: 75px;
  font-size: 18px;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
`;
