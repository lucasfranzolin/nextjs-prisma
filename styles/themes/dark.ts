import { DefaultTheme } from "styled-components"

import { darkColors, gradient } from "../colors/common"

const dark: DefaultTheme = {
  name: "DARK",
  palette: {
    colors: {
      primary: "#BCA4FF",
      secondary: "#82E9FF",
      error: "#FF84B7",
      success: "#34EAB9",
      warning: "#FFD789",
      ...darkColors,
    },
    gradient,
  },
}

export default dark
