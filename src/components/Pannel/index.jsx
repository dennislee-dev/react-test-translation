import { useEffect, useState } from "react";
import { StyledTextarea, StyledWrapper } from "./styles";

function Source({ value, onClickHandler }) {
  const [text, setText] = useState();

  useEffect(() => {
    setText(value);
  }, [value]);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }

  return (
    <StyledWrapper>
      <StyledTextarea
        value={text}
        onChange={onChangeHandler}
        onClick={onClickHandler}
      />
    </StyledWrapper>
  );
}

export default Source;