import React from "react";

import BaseButton from "./BaseButton";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button/BaseButton",
  component: BaseButton,
  decorators: [withDesign],

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
Confirm.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/RntKl73zEWcREFiM5pmzOL/Button?node-id=1%3A18", // <-- paste here!
  },
};

export const Cancel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cancel.args = {
  label: "Button",
  type: "cancel",
};
Cancel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/RntKl73zEWcREFiM5pmzOL/Button?node-id=1%3A11", // <-- paste here!
  },
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Button",
  type: "Default",
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/RntKl73zEWcREFiM5pmzOL/Button?node-id=1%3A10", // <-- paste here!
  },
};
