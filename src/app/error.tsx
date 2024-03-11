'use client'; // Error components must be Client Components

import Footer from '@/components/Constants/Footer';
import Navbar from '@/components/Constants/Navbar';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const { data: session } = useSession();

  return (
    <div>
      <Navbar session={session} />
      <div className='flex h-screen flex-col bg-white'>
        <img
          src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
          alt=''
          className='h-64 w-full object-cover'
        />

        <div className='flex flex-1 items-center justify-center'>
          <div className='mx-auto max-w-xl px-4 py-8 text-center'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              You have encountered an error.
            </h1>

            <p className='mt-4 text-gray-500'>
              Try pressing the button below to try again.
            </p>

            <button
              onClick={() => reset()}
              className='mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring'
            >
              Try again
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
