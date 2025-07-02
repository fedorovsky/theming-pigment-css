import { fn } from 'storybook/test';

import { FirstComponent } from '../src/first-component';

export default {
  title: 'FirstComponent',
  component: FirstComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: 'Primary Button',
  },
};
