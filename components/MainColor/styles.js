import styled from "styled-components";

export const StyledLabel = styled.label`
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  text-align: center;
`;
export const StyledInput = styled.input`
  width: 90px;
  height: 200px;
  padding: 5px;
  margin: 30px;
  border-radius: 20px;
  grid-area: ${(props) => props.gridArea};
`;
export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
