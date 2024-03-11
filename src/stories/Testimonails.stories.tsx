import { Meta, Story } from '@storybook/react';
import Testimonials from '../components/Testimonials';

const meta: Meta = {
  title: 'Testimonials',
  component: Testimonials,
};

export const Default: Story = (args) => <Testimonials {...args} />;

export default meta;
