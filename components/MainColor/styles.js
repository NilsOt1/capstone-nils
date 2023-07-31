import styled from "styled-components";
import { Roboto } from "@next/font/google";
import { StyledButton } from "../OnClickButton";

const roboto = Roboto({
  weight: ["100", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const StyledLabel = styled.label`
  margin: 25px 0;
  text-align: center;
`;
export const StyledInput = styled.input`
  padding: 0;
  margin: 10px 0px;
  border: none;
  height: 120px;
  width: 33%;
  max-width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledDiv = styled.div`
  margin-top: 20px;
`;

export const StyledForm = styled.form`
  text-align: center;
`;

export const StyledColorButton = styled(StyledButton)`
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 50px;
  font-size: 1.5em;
`;
