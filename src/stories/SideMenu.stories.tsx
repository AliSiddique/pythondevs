import { Meta, Story } from '@storybook/react';
import SideMenu from '../components/SideMenu';

const meta: Meta = {
  title: 'SideMenu',
  component: SideMenu,
};

export const Default: Story = (args) => <SideMenu {...args} />;

export default meta;
