import styled from "styled-components";
import { Roboto } from "@next/font/google";

export default function OnClickButton({ type, children, onClick }) {
  return (
    <>
      <StyledButton type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
}

const roboto = Roboto({
  weight: ["100", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 0.5px;
  border-radius: 10px;
  margin: 10px auto;
  text-decoration: none;
  height: 40px;
  width: 120px;
  font-size: 20px;
  background-color: transparent;
  color: #4f4f4f;
  font-family: ${roboto.style.fontFamily};
`;
