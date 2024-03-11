import { Meta, Story } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import { Button } from '../components/ui/button';

const meta: Meta = {
  title: 'Alert Dialog',
  component: AlertDialog,
  argTypes: {
    intent: {
      options: [
        'primary',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
    titleText: {
      // Add argType for titleText
      control: 'text', // Use 'text' control for input field
      name: 'Title Text', // Change the name of the control
      defaultValue: 'Delete your account', // Set the default value
    },
    titleDescription: {
      // Add argType for titleText
      control: 'text', // Use 'text' control for input field
      name: 'Title description', // Change the name of the control
      default:
        'Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.', // Set the default value
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Default: Story = (args) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger asChild>
      <Button {...args} variant='outline'>
        Show Dialog
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{args.titleText}</AlertDialogTitle>
        <AlertDialogDescription>{args.titleDescription}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

Default.args = {
  variant: 'default',
  size: 'lg',
};

export default meta;
