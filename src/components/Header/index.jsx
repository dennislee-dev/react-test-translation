import { useSelector } from "react-redux";
import ProgressBar from "../ProgressBar";
import Logo from "../Logo";
import { StyledHeader } from "./styles";

function Header() {
  const { currentWordsCount } = useSelector(state => state.source);

  return (
    <StyledHeader>
      <Logo>Tolq</Logo>
      <ProgressBar count={currentWordsCount} />
    </StyledHeader>
  );
}

export default Header;
