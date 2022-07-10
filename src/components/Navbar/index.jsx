import { useEffect, useState } from "react";

import Button from "../Button";
import Input from "../Input";
import { StyledNavbar } from "./styles";

function Navbar({ total, currentId, currentChangeHandler }) {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);

  useEffect(
    () => {
      nextDisabled && setNextDisabled(false);
      prevDisabled && setPrevDisabled(false);

      currentId === 1 && setPrevDisabled(true);
      currentId === total && setNextDisabled(true);
    },
    // use eslint disable to prevent needless rerender due to disabled states
    // eslint-disable-next-line
    [currentId, total]
  );

  const firstHandler = () => {
    currentChangeHandler(1);
  }

  const prevHandler = () => {
    currentChangeHandler(currentId === 1 ? 1 : currentId - 1);
  }

  const nextHandler = () => {
    currentChangeHandler(currentId === total ? total : currentId + 1);
  }

  const lastHandler = () => {
    currentChangeHandler(total);
  }

  return (
    <StyledNavbar>
      <Button onClick={firstHandler} disabled={prevDisabled}>{"<<"}</Button>
      <Button onClick={prevHandler} disabled={prevDisabled}>{"<"}</Button>
      <Input value={`${currentId} / ${total}`} disabled />
      <Button onClick={nextHandler} disabled={nextDisabled}>{">"}</Button>
      <Button onClick={lastHandler} disabled={nextDisabled}>{">>"}</Button>
    </StyledNavbar>
  )
}

export default Navbar;