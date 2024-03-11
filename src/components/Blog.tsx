import React from 'react';
import Link from 'next/link';

type Props = {};

export default function Blog({}: Props) {
  return (
    <div className='-m-4 flex flex-wrap'>
      <div className='p-4 md:w-1/3'>
        <div className='h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60'>
          <img
            className='w-full object-cover object-center md:h-36 lg:h-48'
            src='https://images.unsplash.com/photo-1556740730-5e4e7da7f8e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
            alt='blog'
          />
          <div className='p-6'>
            <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
              Blog Title
            </h1>
            <p className='mb-3 leading-relaxed'>Blog Description</p>
            <div className='flex flex-wrap items-center '>
              <Link
                href={``}
                className='inline-flex items-center text-green-500 md:mb-2 lg:mb-0'
              >
                Read
                <svg
                  className='ml-2 h-4 w-4'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
