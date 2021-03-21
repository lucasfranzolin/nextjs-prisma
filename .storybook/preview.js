import { addDecorator } from "@storybook/react"
import { withThemesProvider } from "storybook-addon-styled-component-theme"
import { ThemeProvider } from "styled-components"

import themes from "../styles/themes"

addDecorator(withThemesProvider(themes), ThemeProvider)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
