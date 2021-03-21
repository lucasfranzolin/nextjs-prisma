import React from "react"

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: "small" | "medium" | "large"
  label: string
  onClick?: () => void
}

export const Button = ({
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const width = size === "medium" ? "8rem" : size === "large" ? "16rem" : "4rem"
  const height = size === "medium" ? "24px" : size === "large" ? "36px" : "16px"
  const fontSize = size === "medium" ? "" : size === "large" ? "16px" : "11px"

  return (
    <button
      type="button"
      style={{ backgroundColor, width, height, fontSize }}
      {...props}
    >
      {label}
    </button>
  )
}
