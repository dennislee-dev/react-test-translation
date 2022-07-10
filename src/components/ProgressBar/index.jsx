import { StyledContainer, StyledFilter } from "./styles";

const ProgressBar = ({ count }) => {
  return (
    <StyledContainer>
      Word Counts
      <StyledFilter count={count}>
        {`${count} words`}
      </StyledFilter>
    </StyledContainer>
  );
};

export default ProgressBar;