import React from 'react';

type Props = {};

export default function Stats({}: Props) {
  return (
    <div className='mx-auto max-w-7xl'>
      <section className='body-font text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='-m-4 flex flex-wrap text-center'>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='title-font text-3xl font-medium text-gray-900 sm:text-4xl'>
                2.7K
              </h2>
              <p className='leading-relaxed'>Users</p>
            </div>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='title-font text-3xl font-medium text-gray-900 sm:text-4xl'>
                1.8K
              </h2>
              <p className='leading-relaxed'>Subscribes</p>
            </div>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='title-font text-3xl font-medium text-gray-900 sm:text-4xl'>
                35
              </h2>
              <p className='leading-relaxed'>Downloads</p>
            </div>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='title-font text-3xl font-medium text-gray-900 sm:text-4xl'>
                4
              </h2>
              <p className='leading-relaxed'>Products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
