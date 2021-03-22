import { ReactNode } from "react"

import { StyledButton } from "./Button.styles"

export interface ButtonProps {
  variant: "primary" | "secondary" | "subtle" | "text"
  children?: ReactNode
  onClick?: () => void
}

export const Button = ({ variant, children, ...props }: ButtonProps) => {
  const _variant = variant ?? "primary"
  return (
    <StyledButton variant={_variant} {...props}>
      {children}
    </StyledButton>
  )
}
