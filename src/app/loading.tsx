import { Icons } from '@/components/ui/icons';
import React from 'react';

type Props = {};

export default function loading({}: Props) {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Icons.spinner className='h-10 w-10 animate-spin text-gray-500' />
    </div>
  );
}
