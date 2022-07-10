import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  width: ${(props) => props.width ? props.width : '70px'};
`;