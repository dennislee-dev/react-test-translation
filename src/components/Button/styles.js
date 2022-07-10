import styled from "styled-components";

export const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  border: none;
  border-radius: 50px;
  background: #ccc;
  &:hover {
    background: #aaa;
    transition: background-color 0.3s ease-in;
    cursor: pointer;
  }
`;