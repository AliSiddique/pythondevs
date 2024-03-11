import { Meta, Story } from '@storybook/react';
import Pricing from '../components/Pricing';

const meta: Meta = {
  title: 'Pricing',
  component: Pricing,
};

export const Default: Story = (args) => <Pricing session={null} {...args} />;

export default meta;
