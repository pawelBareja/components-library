import React from "react";
import { ComponentMeta } from "@storybook/react";
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

export const Default = ({ ...args }) => <Loader {...(args as LoaderProps)} />;
