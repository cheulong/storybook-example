import React from "react";

import BaseButton from "./BaseButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/BaseButton",
  component: BaseButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
    type: {
      options: ["confirm", "cancel", "default"],
      control: { type: "select" },
      defaultValue: "default",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "This component is base button.",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BaseButton {...args} />;

export const Confirm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Confirm.args = {
  label: "Button",
  type: "confirm",
};

export const Cancel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cancel.args = {
  label: "Button",
  type: "cancel",
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Button",
  type: "Default",
};
