import Button from './Buttons';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    theme: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    look: {
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
  },
};

export const Main = (args: any) => (
  <Button children="login" {...args} />
);




