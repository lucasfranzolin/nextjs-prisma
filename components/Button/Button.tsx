import React from "react"

import { StyledButton } from "./Button.styles"

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: "small" | "medium" | "large"
  label: string
  onClick?: () => void
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{label}</StyledButton>
}
