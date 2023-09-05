import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import GenericTableComponent from "./GenericTableComponent";
import { peopleData } from "../../exampleData/people";
import { nestedPeople } from "../../exampleData/nestedPeople";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/GenericTableComponent",
  component: GenericTableComponent,
} as Meta<typeof GenericTableComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof GenericTableComponent> = (args) => (
  <GenericTableComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: nestedPeople,
};

// export const Nested = Template.bind({});
// Default.args = {
//   data: nestedPeople,
// };
// export const HelloWorld = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// HelloWorld.args = {
//   label: "Hello world!",
// };

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click me!",
// };
