import React from 'react';

type Props = {};

export default function Features({}: Props) {
  return (
    <div>
      <section className='body-font text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row lg:w-3/5'>
            <div className='inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 sm:mr-10 sm:h-32 sm:w-32'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='h-10 w-10 sm:h-16 sm:w-16'
                viewBox='0 0 24 24'
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <div className='mt-6 flex-grow text-center sm:mt-0 sm:text-left'>
              <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                Shooting Stars
              </h2>
              <p className='text-base leading-relaxed'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className='mt-3 inline-flex items-center text-green-500'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='ml-2 h-4 w-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
          <div className='mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row lg:w-3/5'>
            <div className='mt-6 flex-grow text-center sm:mt-0 sm:text-left'>
              <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                The Catalyzer
              </h2>
              <p className='text-base leading-relaxed'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className='mt-3 inline-flex items-center text-green-500'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='ml-2 h-4 w-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
            <div className='order-first inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 sm:order-none sm:ml-10 sm:h-32 sm:w-32'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='h-10 w-10 sm:h-16 sm:w-16'
                viewBox='0 0 24 24'
              >
                <circle cx='6' cy='6' r='3'></circle>
                <circle cx='6' cy='18' r='3'></circle>
                <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
              </svg>
            </div>
          </div>
          <div className='mx-auto flex flex-col items-center sm:flex-row lg:w-3/5'>
            <div className='inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 sm:mr-10 sm:h-32 sm:w-32'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='h-10 w-10 sm:h-16 sm:w-16'
                viewBox='0 0 24 24'
              >
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div className='mt-6 flex-grow text-center sm:mt-0 sm:text-left'>
              <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                The 400 Blows
              </h2>
              <p className='text-base leading-relaxed'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className='mt-3 inline-flex items-center text-green-500'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='ml-2 h-4 w-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
          <button className='mx-auto mt-20 flex rounded border-0 bg-green-500 px-8 py-2 text-lg text-white hover:bg-green-600 focus:outline-none'>
            Button
          </button>
        </div>
      </section>
    </div>
  );
}
