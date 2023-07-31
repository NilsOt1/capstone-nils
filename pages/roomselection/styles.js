import { StyledButton } from "@/components/OnClickButton";
import styled from "styled-components";
import { Roboto } from "@next/font/google";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const StyledHeading = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: 3.5em;
  margin: 50px 0px 20px 0px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;

export const CustomNewRoomButton = styled(StyledButton)`
  margin-top: 40px;
  height: 60px;
  width: 180px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.5em;
  font-family: ${roboto.style.fontFamily};
  font-weight: 100;
  border: solid 1px;
`;
