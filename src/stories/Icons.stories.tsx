import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icons } from '../components/ui/icons';

const meta: Meta = {
  title: 'Icons',
  component: Icons.spinner,
  argTypes: {},

  parameters: {
    controls: { expanded: true },
  },
};

export const Default: Story = (args) => (
  <Icons.spinner className='animate-spin' {...args} />
);

export const apple: Story = (args) => <Icons.apple className='h-10 w-10' />;

export const google: Story = (args) => <Icons.google className='h-10 w-10' />;

export const twitter: Story = (args) => <Icons.twitter className='h-10 w-10' />;

export const logo: Story = (args) => <Icons.logo className='h-10 w-10' />;

export const github: Story = (args) => <Icons.gitHub className='h-10 w-10' />;

export const radix: Story = (args) => <Icons.radix className='h-10 w-10' />;

export const aria: Story = (args) => <Icons.aria className='h-10 w-10' />;

export const npm: Story = (args) => <Icons.npm className='h-10 w-10' />;
export const yarn: Story = (args) => <Icons.yarn className='h-10 w-10' />;

export const pnpm: Story = (args) => <Icons.pnpm className='h-10 w-10' />;

export const react: Story = (args) => <Icons.react className='h-10 w-10' />;

export const tailwind: Story = (args) => (
  <Icons.tailwind className='h-10 w-10' />
);

export const paypal: Story = (args) => <Icons.paypal className='h-10 w-10' />;

Default.args = {};

export default meta;
