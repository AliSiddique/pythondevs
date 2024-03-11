import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge } from '../components/ui/badge';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'select' },
    },
    badgeText: {
      // Add argType for titleText
      control: 'text', // Use 'text' control for input field
      name: 'Badge text', // Change the name of the control
    },
  },

  parameters: {
    controls: { expanded: true },
  },
};

export const Default: Story = (args) => (
  <Badge {...args}>{args.badgeText}</Badge>
);

Default.args = {
  variant: 'default',
};

export default meta;
