import { Meta, Story } from '@storybook/react';
import Navbar from '../components/Constants/Navbar';

const meta: Meta = {
  title: 'Navbar',
  component: Navbar,
};

export const Default: Story = (args) => <Navbar session={null} {...args} />;

export default meta;
