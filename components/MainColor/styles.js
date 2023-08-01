import styled from "styled-components";
import { StyledButton } from "../MainButton";

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
  text-align: center;
`;

export const StyledColorMeButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  width: 200px;
  height: 50px;
  font-size: 1.7em;
`;
