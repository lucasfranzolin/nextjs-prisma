import styled from "styled-components"

export const StyledButton = styled.button`
  width: 200px;
  line-height: 200px;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid dimgrey;
  border-radius: ${(props) => props.theme.borderRadius};
`
