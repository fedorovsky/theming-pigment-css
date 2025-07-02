import { SecondComponent } from '../src/second-component';

export default {
  title: 'SecondComponent',
  component: SecondComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
  args: { message: 'Hello from SecondComponent!' },
};

export const Primary = {
  args: {
    message: 'Hello from SecondComponent!',
  },
};
