import { Meta, Story } from '@storybook/react';
import { Button, buttonVariants } from '../components/ui/button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    intent: {
      options: [
        'primary',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Default: Story = (args) => <Button {...args}>Button</Button>;

Default.args = {
  variant: 'default',
  size: 'lg',
};

export default meta;
