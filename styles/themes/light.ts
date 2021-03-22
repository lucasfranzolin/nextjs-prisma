import { DefaultTheme } from "styled-components"

import { darkColors, gradient } from "../colors/common"

const light: DefaultTheme = {
  name: "DEFAULT",
  palette: {
    colors: {
      primary: "#5F2EEA",
      secondary: "#1CC8EE",
      error: "#ED2E7E",
      success: "#00BA88",
      warning: "#F4B740",
      ...darkColors,
    },
    gradient,
  },
}

export default light
