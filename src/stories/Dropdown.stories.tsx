import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { people } from './data/people';
import { fruits } from './data/fruits';

import Dropdown, { DropDownItem } from '../components/Dropdown';//, { ButtonProps } from '../components/Button';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: any) => <Dropdown {...args} />;//(args: ButtonProps) => <Dropdown {...args} />;

export const ImageAndText = Template.bind({});
ImageAndText.args = {
  items: people,
  handleChange: (item: DropDownItem) => console.log('Selected: ' + item.text)
};

export const Text = Template.bind({});
Text.args = {
  items: fruits,
  handleChange: (item: DropDownItem) => console.log('Selected: ' + item.text)
};
