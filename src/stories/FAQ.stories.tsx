import { Meta, Story } from '@storybook/react';
import FAQ from '../components/FAQ';

const meta: Meta = {
  title: 'FAQ',
  component: FAQ,
};

export const Default: Story = (args) => <FAQ {...args} />;

export default meta;
