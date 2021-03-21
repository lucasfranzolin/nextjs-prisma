import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import { Button, ButtonProps } from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  size: "medium",
  label: "Button",
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
  label: "Button",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
  label: "Button",
}
