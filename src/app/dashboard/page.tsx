'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    window.location.href = data.url;
  };
  return (
    <div>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Billing</button>
      </form>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
