import styled from "styled-components";
import { StyledButton } from "@/components/MainButton";

export const StyledInfoText = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};

  &::before {
    content: "x";
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const StyledInfoButton = styled(StyledButton)`
  border-radius: 30px;
  height: 60px;
  width: 60px;
  font-size: 1.5em;
  font-weight: 300;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const StyledButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 20px 0 0;
`;

export const StyledBackButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  border-radius: 30px;
  height: 60px;
  width: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledInspirationButton = styled(StyledButton)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  height: 45px;
  width: 130px;
  font-size: 1.4em;
`;
