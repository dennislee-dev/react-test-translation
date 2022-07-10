import { StyledButton } from "./styles";

function Button(props) {
  const { children, ...rest } = props;

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
};

export default Button;