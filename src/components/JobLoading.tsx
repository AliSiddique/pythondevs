import React from 'react'
import { Skeleton } from './ui/skeleton'

type Props = {}

export default function JobLoading({}: Props) {
  return (
    <div>
           <div className='mx-auto max-w-6xl px-8  md:px-32'>
          <div className='group relative py-6 sm:rounded-2xl'>
          <div className='absolute -inset-x-4 -inset-y-px rounded-2xl bg-slate-50 opacity-0 duration-200 group-hover:opacity-100 sm:-inset-x-6 lg:-inset-x-8'></div>
          <div className='relative flex items-center'>
            <div className='relative h-[3.125rem] w-[3.125rem] flex-none sm:h-[3.75rem] sm:w-[3.75rem]'>
              {/* <img
                className='absolute inset-0 h-full w-full rounded-full object-cover'
                src={"https://hirewise.lexingtonthemes.com/logos/coinbase.svg"}
                alt=''
              /> */}
              <Skeleton className='absolute inset-0 h-full w-full rounded-full object-cover' />
              <div className='absolute inset-0 rounded-full ring-1 ring-inset ring-black/[0.08]'></div>
            </div>
            <dl className='ml-4 flex flex-auto flex-wrap gap-x-2 gap-y-1 overflow-hidden sm:ml-6 sm:grid sm:grid-cols-[auto_1fr_auto_auto] sm:items-center'>
              <div className='col-span-2 mr-2.5 flex-none sm:mr-0'>
                <dt className='sr-only'>Company</dt>
                <dd className='text-xs font-semibold leading-6 text-slate-500'>
                  <Skeleton className='w-full h-2' />
                </dd>
              </div>
              <div className='col-start-3 row-start-2 -ml-2.5 flex-auto sm:ml-0 sm:pl-6'>
                <dt className='sr-only'>Location</dt>
                <dd className='flex items-center text-xs leading-6 text-slate-500'>
                  <svg
                    viewBox='0 0 2 2'
                    aria-hidden='true'
                    className='mr-2 h-0.5 w-0.5 flex-none fill-slate-400 sm:hidden'
                  >
                    <circle cx='1' cy='1' r='1'></circle>
                  </svg>
                  <Skeleton className='w-full h-2' />
                </dd>
              </div>
              <div className='col-span-2 col-start-1 w-full flex-none'>
                <dt className='sr-only'>Title</dt>
                <dd className='text-base font-semibold leading-6 text-slate-900'>
                  <a href={"/jobs/2"}>
                    <span className='absolute -inset-x-4 inset-y-[calc(-1*(theme(spacing.6)+1px))] sm:-inset-x-6 sm:rounded-2xl lg:-inset-x-8'></span>
                    <Skeleton className='w-full h-2' />

                  </a>
                </dd>
              </div>
              <div className='col-start-1 mr-2.5 flex-none'>
                <dt className='sr-only'>Type</dt>
                <dd className='text-xs leading-6 text-slate-500'>                  <Skeleton className='w-full h-2' />
</dd>
              </div>
              <div className='col-span-3 -ml-2.5 flex-none'>
                <dt className='sr-only'>Salary</dt>
                <dd className='flex items-center text-xs leading-6 text-slate-500'>
                  <svg
                    viewBox='0 0 2 2'
                    aria-hidden='true'
                    className='mr-2 h-0.5 w-0.5 flex-none fill-slate-400'
                  >
                    <circle cx='1' cy='1' r='1'></circle>
                  </svg>
                  <Skeleton className='w-full h-2' />
                </dd>
              </div>
            </dl>
          </div>
        </div>
</div>
    </div>
  )
}