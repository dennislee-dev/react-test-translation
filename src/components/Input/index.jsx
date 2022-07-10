import { StyledInput } from "./styles";

function Input(props) {
  const { value, width, ...rest } = props;
  return (
    <StyledInput value={value} width={width} {...rest} />
  )
}

export default Input;