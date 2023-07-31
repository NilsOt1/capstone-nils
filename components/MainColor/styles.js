import styled from "styled-components";
import { StyledButton } from "../OnClickButton";

export const StyledColorLabel = styled.label`
  margin: 25px 0;
`;
export const StyledColorInput = styled.input`
  margin-top: 20px;
  border: none;
  height: 120px;
  width: 33%;
  max-width: 200px;
`;

export const StyledMainColorForm = styled.form`
  /* text-align: center; */
`;

export const StyledColorMeButton = styled(StyledButton)`
  margin: 15px auto;
  width: 200px;
  height: 50px;
  font-size: 1.7em;
`;
