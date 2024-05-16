"use client"
import React, { useEffect } from 'react';

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  title: string;
  description: string;
};

export default function Hero({title,description}: Props) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const router = useRouter()
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault()
          e.preventDefault();
          router.push(`/search/${search}`);
     
      }
    }
 
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [search])

  return (
    <section>
        <header className='mx-auto max-w-7xl px-8 pt-8'>
          <div className='rounded-3xl bg-gradient-to-tr from-[#4584b6] via-[#4584b6] to-sky-300 p-8 lg:px-20 lg:py-32'>
            <div className='mx-auto max-w-xl text-center'>
              <span className='relative rounded-full bg-white/10 px-4 py-2 text-sm leading-6 text-white ring-1 ring-white/20'>
                {title}
              </span>
              <h2 className='font-display mt-8 text-balance text-3xl font-light tracking-tight text-white lg:text-4xl'>
                {description}
              </h2>
              <p className='mt-4 text-balance text-base text-slate-300'>
                Jobs is a handpicked job platform showcasing premier
                opportunities for developers, designers, and marketers within
                the tech industry.
              </p>
            </div>
          </div>
        </header>
        <div className='mx-auto max-w-7xl px-8 lg:px-0'>
          <div className='mx-auto max-w-7xl py-6 md:px-32 lg:-mt-24'>
            <div className='mx-auto mt-4 rounded-2xl bg-white/20 p-4 shadow-2xl shadow-slate-500/40 backdrop-blur-xl lg:p-8'>
              <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-1'>
                <div>
                  <div className='relative flex items-center justify-start w-'>
                    <input
                      className='block w-full rounded-lg border-0 border-slate-300 px-4 py-2.5 pl-4 pr-8 text-left leading-none text-slate-500 shadow shadow-slate-500/20 outline-none ring-1 ring-inset ring-slate-300 duration-200 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6 lg:rounded-xl'
                      type='text'
                      placeholder='Search...'
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <svg
                      className='absolute right-3 z-10 cursor-pointer'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z'
                        stroke='#6b7280'
                        stroke-width='1.66667'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='M21 21L15 15'
                        stroke='#6b7280'
                        stroke-width='1.66667'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </div>
                </div>
{/* <Dropw /> */}
                {/* <div className='relative'>
                  <button
                    className='relative flex w-full items-center justify-between gap-2 rounded-lg border-0 border-slate-300 bg-white px-4 py-2.5 text-slate-500 shadow shadow-slate-500/20 outline-none ring-1 ring-inset ring-slate-300 duration-200 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6 lg:rounded-xl'
                    type='button'
                    onClick={() => setOpen(!open)}
                  >
                    <span>Location</span>
                    <svg
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      style={{ marginTop: '3px' }}
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </button>
                  <div
                    
                    className={`${open ? "block" : "hidden"} absolute left-0 z-10 mt-2 w-full rounded-md bg-white shadow-md shadow-slate-500/20`}
                  >
                    <a
                      href='/board/location'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Mariehamn, Åland Islands
                    </a>

                    <a
                      href='/board/location'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Madrid, Spain
                    </a>

                    <a
                      href='/board/location'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Milano, Italy
                    </a>
                  </div>
                </div> */}
                {/* <div className='relative'>
                  <button
                    className='relative flex w-full items-center justify-between gap-2 rounded-lg border-0 border-slate-300 bg-white px-4 py-2.5 text-slate-500 shadow shadow-slate-500/20 outline-none ring-1 ring-inset ring-slate-300 duration-200 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6 lg:rounded-xl'
                    type='button'
                  >
                    <span>Levels</span>
                    <svg
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      style={{ marginTop: '3px' }}
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </button>
                  <div
                    className='absolute left-0 z-10 mt-2 w-full rounded-md bg-white shadow-md shadow-slate-500/20'
                    style={{ minWidth: '15rem' }}
                  >
                    <a
                      href='/board/level'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Junior
                    </a>

                    <a
                      href='/board/level'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Senior
                    </a>

                    <a
                      href='/board/level'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Executive
                    </a>
                  </div>
                </div> */}
                {/* <div className='relative'>
                  <button
                    className='relative flex w-full items-center justify-between gap-2 rounded-lg border-0 border-slate-300 bg-white px-4 py-2.5 text-slate-500 shadow shadow-slate-500/20 outline-none ring-1 ring-inset ring-slate-300 duration-200 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6 lg:rounded-xl'
                    type='button'
                  >
                    <span>Category</span>
                    <svg
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      style={{ marginTop: '3px' }}
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </button>
                  <div className='absolute left-0 z-10 mt-2 w-full rounded-md bg-white shadow-md shadow-slate-500/20'>
                    <a
                      href='/board/category'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      UI/UX
                    </a>

                    <a
                      href='/board/category'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Web Development
                    </a>

                    <a
                      href='/board/category'
                      className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'
                    >
                      Product Design
                    </a>
                  </div>
                </div> */}
                {/* <Dropw />
                <Dropw /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

 function Dropw() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }:any) => (
        <>
          <div className="relative ">
            <Listbox.Button                     className='relative flex w-full items-center justify-between gap-2 rounded-lg border-0 border-slate-300 bg-white px-4 py-2.5 text-slate-500 shadow shadow-slate-500/20 outline-none ring-1 ring-inset ring-slate-300 duration-200 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6 lg:rounded-xl'
>
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-0 z-10 mt-2 w-full rounded-md bg-white shadow-md shadow-slate-500/20">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        ' block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md  disabled:text-slate-500'
                      )
                      
                    }
                    // className='hover:text-purple block w-full px-4 py-2.5 text-left text-sm text-slate-500 first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-slate-50 disabled:text-slate-500'

                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
