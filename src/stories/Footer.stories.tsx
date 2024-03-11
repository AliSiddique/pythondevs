import { Meta, Story } from '@storybook/react';
import Footer from '../components/Constants/Footer';

const meta: Meta = {
  title: 'Footer',
  component: Footer,
};

export const Default: Story = (args) => <Footer {...args} />;

export default meta;
