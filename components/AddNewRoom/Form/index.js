import OnClickButton from "@/components/OnClickButton";
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
        <input
          type="text"
          id="roomName"
          name="name"
          maxLength={18}
          required
        ></input>
      </StyledLabel>
      <OnClickButton type="submit" text="Create Room" />
    </form>
  );
}

const StyledHeading = styled.h2`
  text-align: center;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
`;
