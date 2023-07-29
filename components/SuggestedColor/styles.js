import styled from "styled-components";

export const StyledSuggestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};
  margin: 5px;
  width: 33%;
  height: 250px;
  border-radius: 20px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
`;
