import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { peopleData } from "../../exampleData/people";
import { nestedPeople } from "../../exampleData/nestedPeople";
import NestedTableComponent from "./NestedTableComponent";

export default {
  title: "ReactComponentLibrary/NestedTableComponent",
  component: NestedTableComponent,
} as Meta<typeof NestedTableComponent>;

const NestedTemplate: StoryFn<typeof NestedTableComponent> = (args: any) => (
  <NestedTableComponent {...args} />
);

export const NestedDefault = NestedTemplate.bind({});
NestedDefault.args = {
  data: nestedPeople,
};
