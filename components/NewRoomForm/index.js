import {
  StyledForm,
  StyledFormHeading,
  StyledFormLabel,
  StyledFormInput,
  StyledFormButton,
  StyledFormButtonSpan,
} from "./styles";

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
      <StyledFormHeading>Add new room</StyledFormHeading>
      <StyledFormLabel htmlFor="roomName">
        Room Name{""}
        <StyledFormInput
          type="text"
          id="roomName"
          name="name"
          maxLength={12}
          required
        ></StyledFormInput>
      </StyledFormLabel>
      <StyledFormButtonSpan>
        <StyledFormButton type="submit">Create</StyledFormButton>
        <StyledFormButton onClick={handleFormClose} type="button">
          Cancel
        </StyledFormButton>
      </StyledFormButtonSpan>
    </StyledForm>
  );
}
