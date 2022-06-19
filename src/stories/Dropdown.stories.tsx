import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../components/Dropdown';//, { ButtonProps } from '../components/Button';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: any) => <Dropdown {...args} />;//(args: ButtonProps) => <Dropdown {...args} />;

export const SandBox = Template.bind({});
SandBox.args = {
  items: people
};

// export const ClickEvent = Template.bind({});
// ClickEvent.args = {
//   value: 'Click Me!',
//   handleClick: () => {alert("Clicked")}
// };
