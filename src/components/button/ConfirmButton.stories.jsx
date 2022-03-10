import React from "react";

import ConfirmButton from "./ConfirmButton";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button/ConfirmButton",
  component: ConfirmButton,
  decorators: [withDesign],

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ConfirmButton {...args} />;

export const primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
primary.args = {
  label: "Button",
};
primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/RntKl73zEWcREFiM5pmzOL/Button?node-id=1%3A18", // <-- paste here!
  },
};
