import React from "react";

import ConfirmButton from "./ConfirmButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/ConfirmButton",
  component: ConfirmButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ConfirmButton {...args} />;

export const primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
