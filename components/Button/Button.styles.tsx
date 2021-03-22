import styled from "styled-components"

export const StyledButton = styled.button<any>`
  all: unset;
  cursor: pointer;
  text-align: center;
  border-radius: 40px;
  font-weight: 600;
  letter-spacing: 0.75px;
  font-style: normal;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 200px;
  height: 64px;
  /* -- */
  background: ${(props) => props.theme.palette.colors[props.variant]};
  line-height: 28px;
  font-size: 16px;
  color: #f7f7fc;
`
