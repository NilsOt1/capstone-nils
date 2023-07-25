import styled from "styled-components";
import { Roboto } from "@next/font/google";

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
  margin-top: 8px;
  border: none;
  height: 100px;
  width: 33%;
  max-width: 200px;
  background-color: var(--background-color);
`;

export const StyledDiv = styled.div`
  margin-top: 20px;
  background-color: var(--background-color);
`;

export const StyledForm = styled.form`
  text-align: center;
  background-color: var(--background-color);
`;
