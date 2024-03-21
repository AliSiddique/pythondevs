import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

type Props = {};

export default function loading({}: Props) {
  return (
    <div>
      <Skeleton className='mb-4' />
    </div>
  );
}
