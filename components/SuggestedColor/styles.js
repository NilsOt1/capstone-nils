import styled from "styled-components";

export const StyledSuggestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.color};
  margin: 5px;
  width: 33%;
  height: 210px;
  border-radius: 10px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;
