import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loader, { LoaderProps } from "./Loader";

export default {
  title: "UI component library/Loader",
  component: Loader,
  args: {
    isLoading: true,
    text: "",
    children: <h1> some react child component</h1>,
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderEmpty = Template.bind({});
LoaderEmpty.args = {};

export const LoaderWithText = Template.bind({});
LoaderWithText.args = {
  text: "please wait",
};

// export const Default = ({ ...args }) => <Loader {...(args as LoaderProps)} />;
