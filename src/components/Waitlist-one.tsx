'use client';
import React from 'react';

type Props = {};

export default function Waitlistone({}: Props) {
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <div
        className='relative flex h-screen w-full flex-col items-center justify-center bg-neutral-950 antialiased'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className='mx-auto max-w-2xl p-4'>
          <h1 className='relative z-10 bg-gradient-to-b bg-clip-text text-center font-sans text-lg font-bold text-transparent text-white md:text-7xl'>
            Join the waitlist
          </h1>
          <p></p>
          <p className='relative z-10 mx-auto my-2 max-w-lg text-center text-sm font-bold text-neutral-100'>
            Get early access to our a{' '}
            <span className='text-lg underline'>FREE</span> Next.JS SAAS
            boilerplate. We'll send you an email when we're ready to launch!
          </p>
          <div className='flex items-center justify-center gap-2'>
            <input
              type='email'
              placeholder='hacker@fbi.com'
              required
              className='relative z-10 mt-4 w-full rounded-lg border border-neutral-800 bg-neutral-950 text-white placeholder:text-neutral-700 focus:ring-2 focus:ring-teal-500'
            />
            <button className='z-10 mt-4 rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-white focus:ring-2 focus:ring-teal-500'>
              {sent ? 'Sent!' : 'Join'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
