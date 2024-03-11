'use client';
import { loadStripe } from '@stripe/stripe-js';
import { Session } from 'next-auth';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import { Icons } from './ui/icons';
import { toast } from 'sonner';

type Props = {
  session: Session | null;
};

interface PricingTiers {
  name: string;
  price: number;
  priceId: string;
  description?: string;
  features: PricingFeatures[];
}
interface PricingFeatures {
  name: string;
  included: boolean;
}

let pricingTiers: PricingTiers[] = [
  {
    name: 'Starter',
    priceId: 'price_1OrhlXLpdZdoXycfkD8g6MeF',
    price: 20,
    description: 'For small teams just getting started',
    features: [
      {
        name: '10 users',
        included: true,
      },
      {
        name: '2GB of storage',
        included: true,
      },
      {
        name: 'Email support',
        included: true,
      },
      {
        name: 'Help center access',
        included: false,
      },
      {
        name: 'Phone support',
        included: false,
      },
      {
        name: 'Community access',
        included: false,
      },
    ],
  },
  {
    name: 'Pro',
    priceId: 'price_1OrhmbLpdZdoXycfKQg3muTM',
    price: 30,
    description: 'For small teams just getting started',
    features: [
      {
        name: '20 users',
        included: true,
      },
      {
        name: '5GB of storage',
        included: true,
      },
      {
        name: 'Email support',
        included: true,
      },
      {
        name: 'Help center access',
        included: true,
      },
      {
        name: 'Phone support',
        included: false,
      },
      {
        name: 'Community access',
        included: false,
      },
    ],
  },
  {
    name: 'Enterprise',
    priceId: 'price_1OrhnKLpdZdoXycfTIzHFEVr',
    price: 100,
    description: 'For small teams just getting started',
    features: [
      {
        name: '50 users',
        included: true,
      },
      {
        name: '20GB of storage',
        included: true,
      },
      {
        name: 'Email support',
        included: true,
      },
      {
        name: 'Help center access',
        included: true,
      },
      {
        name: 'Phone support',
        included: true,
      },
      {
        name: 'Community access',
        included: true,
      },
    ],
  },
];

export default function Pricing({ session }: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  async function handleSubmit(event: FormEvent, name:string,priceId: string) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ name,priceId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      const stripePromise = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
      );
      if (stripePromise)
        await stripePromise.redirectToCheckout({ sessionId: data.id });
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toast.error('An unexpected error happened occurred:', error);
    }
  }
  return (
    <div>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8'>
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className='divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm'
            >
              <div className='p-6 sm:px-8'>
                <h2 className='text-lg font-medium text-gray-900'>
                  {tier.name}
                  <span className='sr-only'>Plan</span>
                </h2>

                <p className='mt-2 text-gray-700'>{tier.description}</p>

                <p className='mt-2 sm:mt-4'>
                  <strong className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                    {' '}
                    ${tier.price}{' '}
                  </strong>

                  <span className='text-sm font-medium text-gray-700'>
                    /month
                  </span>
                </p>
                {session ? (
                  <button
                    className='mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6'
                    onClick={(e) => handleSubmit(e,tier.name, tier.priceId)}
                  >
                    {isLoading ? (
                      <Icons.spinner className='h-6 w-5 animate-spin' />
                    ) : (
                      'Get Started'
                    )}
                  </button>
                ) : (
                  <Link
                    className='mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6'
                    href='/login'
                  >
                    Get Started
                  </Link>
                )}
              </div>

              <div className='p-6 sm:px-8'>
                <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                  What's included:
                </p>

                <ul className='mt-2 space-y-2 sm:mt-4'>
                  {tier.features.map((feature, index) => (
                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> {feature.name} </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
