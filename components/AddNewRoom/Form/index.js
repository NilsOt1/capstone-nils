import { StyledButton } from "@/components/OnClickButton";
import styled from "styled-components";

export default function NewRoomForm({ onCreateRoom, handleFormClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    onCreateRoom(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add new room</StyledHeading>
      <StyledLabel htmlFor="roomName">
        Room Name{""}
        <StyledInput
          type="text"
          id="roomName"
          name="name"
          maxLength={18}
          required
        ></StyledInput>
      </StyledLabel>
      <StyledButtonsSpan>
        <CustomCreateButton type="submit">Create</CustomCreateButton>
        <CustomCreateButton onClick={handleFormClose} type="button">
          Cancel
        </CustomCreateButton>
      </StyledButtonsSpan>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 15px;
  border-bottom: solid 0.5px #000;
  border-top: solid 0.5px #000;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 1.6em;
  margin-top: 5px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  font-size: 1.3em;
`;

const StyledInput = styled.input`
  margin-left: 5px;
  background-color: transparent;
`;

const StyledButtonsSpan = styled.span`
  display: flex;
  justify-content: center;
`;

const CustomCreateButton = styled(StyledButton)`
  border: solid 0.5px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  font-weight: 300;
  padding: 10px;
  margin: 15px 5px;
  height: 40px;
  width: 100px;
`;
