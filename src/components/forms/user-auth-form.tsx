'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '../ui/icons';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthFormSchema = z.object({
  email: z.string().email(),
});
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof UserAuthFormSchema>>({
    resolver: zodResolver(UserAuthFormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof UserAuthFormSchema>) {
    // Do something with the form values.
    const result: any | undefined = await signIn('email', {
      email: values.email,
      redirect: false,
    });
    if (result.ok) {
      // Handle sign-in error
      toast.success('Email sent for sign-in');
      setIsLoading(false);
    } else {
      // Handle successful sign-in
      setIsLoading(false);
      toast.error('Error sending email in');
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              {...form.register('email')}
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
          <Button type='submit' disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant='outline'
        type='button'
        disabled={isLoading}
        onClick={() => signIn('github')}
      >
        {isLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.gitHub className='mr-2 h-4 w-4' />
        )}{' '}
        GitHub
      </Button>
      <Button
        variant='outline'
        type='button'
        disabled={isLoading}
        onClick={() => signIn('google')}
      >
        {isLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.google className='mr-2 h-4 w-4' />
        )}{' '}
        Google
      </Button>
    </div>
  );
}
