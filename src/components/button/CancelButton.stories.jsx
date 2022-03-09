import React from "react";

import CancelButton from "./CancelButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/CancelButton",
  component: CancelButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CancelButton {...args} />;

export const primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
