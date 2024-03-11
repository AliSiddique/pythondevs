import { Meta, Story } from '@storybook/react';
import LandingpageOne from '../components/LandingPages/Landingpage-one';

const meta: Meta = {
  title: 'LandingpageOne',
  component: LandingpageOne,
};

export const Default: Story = (args) => <LandingpageOne {...args} />;

export default meta;
