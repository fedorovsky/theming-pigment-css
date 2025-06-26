import { fn } from 'storybook/test';

import { PigmentCard } from '../src';

export default {
  title: 'PigmentCard',
  component: PigmentCard,
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
