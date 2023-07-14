import styled from "styled-components";

export const StyledSuggestion = styled.div`
  background-color: ${(props) => props.color};
  margin: 20px;
  height: 150px;
  border-radius: 30px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
