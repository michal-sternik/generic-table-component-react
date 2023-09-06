import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import GenericTableComponent from "./GenericTableComponent";
import { peopleData } from "../../exampleData/people";
import { nestedPeople } from "../../exampleData/nestedPeople";

export default {
  title: "ReactComponentLibrary/GenericTableComponent",
  component: GenericTableComponent,
} as Meta<typeof GenericTableComponent>;

const Template: StoryFn<typeof GenericTableComponent> = (args) => (
  <GenericTableComponent {...args} />
);

//we focus on 1d json data
export const Default = Template.bind({});
Default.args = {
  data: peopleData,
};
