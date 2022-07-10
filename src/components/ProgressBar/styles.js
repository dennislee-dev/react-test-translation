import styled from "styled-components"

export const StyledContainer = styled.div`
  width: 100%;
  border-radius: 50px;
`;

export const StyledFilter = styled.div`
  height: 100%;
  width: ${(props) => props.count ? props.count * 10 : 0}px;
  color: white;
  border-radius: inherit;
  text-align: center;
  background: ${(props) => props.count > 100 ? 'red' : 'green'};
`;