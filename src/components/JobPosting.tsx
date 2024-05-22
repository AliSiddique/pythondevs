import React from 'react'

type Props = {}

export default function JobPosting({}: Props) {
  return (
    <div>
              <section>
        <div className='mx-auto max-w-7xl px-8 py-12 md:px-32'>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-1'>
            <div className='relative overflow-hidden rounded-3xl border bg-gradient-to-tr from-[#4584b6] via-[#4584b6] to-sky-300 p-8 shadow-2xl shadow-slate-500/30'>
              <div className='relative w-full'>
                <p className='text-lg font-medium text-white'>
                  Post a featured job offer
                </p>
                <p className='mt-4 text-base text-slate-200'>
                  <span className='font-medium leading-6 text-purple-100'>
                    Boost your job listing ⏤
                  </span>{' '}
                  Gain maximum exposure by posting it as a featured opportunity
                </p>
                <div className='mt-6'>
                  <a
                    href='/post-job'
                    className='inline-flex w-full items-center rounded-full bg-white px-5 py-3 text-sm leading-4 text-purple-500 duration-200 hover:bg-purple-50 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 md:w-auto md:focus:ring-2'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            {/* <div className='relative overflow-hidden rounded-3xl border p-8 shadow-2xl shadow-slate-500/20'>
              <div className='relative w-full'>
                <p className='text-lg font-medium text-slate-900'>
                  Post a free job offer
                </p>
                <p className='mt-4 text-base text-slate-500'>
                  <span className='font-medium leading-6 text-slate-600'>
                    Amplify your job listing ⏤
                  </span>{' '}
                  Increase visibility by posting it as a featured opportunity,
                  free of charge
                </p>
                <div className='mt-6'>
                  <a
                    href='/post-job-featured'
                    className='inline-flex w-full items-center rounded-full bg-purple-50 px-5 py-3 text-sm leading-4 text-purple-500 duration-200 hover:bg-purple-800 hover:text-purple-100 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:w-auto md:focus:ring-2'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}