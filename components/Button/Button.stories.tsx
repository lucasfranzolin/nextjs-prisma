import React from "react"
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "./Button"

export default {
  title: "Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  children: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
}
