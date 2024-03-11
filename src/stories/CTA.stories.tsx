import { Meta, Story } from '@storybook/react';
import CTA from '../components/CTA';

const meta: Meta = {
  title: 'CTA',
  component: CTA,
};

export const Default: Story = (args) => <CTA {...args} />;

export default meta;
