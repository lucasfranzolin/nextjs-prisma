import { ReactNode } from "react"

import { StyledButton } from "./Button.styles"

export interface ButtonProps {
  variant?: "primary" | "secondary" | "subtle" | "text"
  children?: ReactNode
  onClick?: () => void
}

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
