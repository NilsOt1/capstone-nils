import { StyledButton } from "@/components/MainButton";
import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 15px;
  border-bottom: solid 0.5px #000;
  border-top: solid 0.5px #000;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const StyledFormHeading = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 1.6em;
  margin-top: 5px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;

export const StyledFormLabel = styled.label`
  display: flex;
  justify-content: center;
  font-size: 1.3em;
`;

export const StyledFormInput = styled.input`
  margin-left: 5px;
  border-radius: 1px;
`;

export const StyledFormButtonSpan = styled.span`
  display: flex;
  justify-content: center;
`;

export const StyledFormButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 15px 5px;
  height: 40px;
  width: 100px;
  font-size: 20px;
`;
