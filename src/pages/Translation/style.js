import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  background: #888;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledContent = styled.div`
  width: 50%;
  padding: 5px;
  display: flex;

  @media(max-width: 768px) {
    width: auto;
    height: 50%;
  }
`;