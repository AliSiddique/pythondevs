import { Meta, Story } from '@storybook/react';
import Blog from '../components/Blog';

const meta: Meta = {
  title: 'Blog',
  component: Blog,
};

export const Default: Story = (args) => <Blog {...args} />;

export default meta;
