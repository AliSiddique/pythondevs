import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  session: Session | null;
};

interface NavbarLinks {
  title: string;
  href: string;
}

const links: NavbarLinks[] = [
  { title: 'Pricing', href: '#' },
  { title: 'Blog', href: '/blog' },
];

export default function Navbar({ session }: Props) {
  return (
    <section className='w-full bg-white antialiased'>
      <div className='mx-auto max-w-7xl px-8 lg:px-32'>
        <nav className='relative select-none' x-data='{ showMenu: false }'>
          <div className='relative mx-auto flex h-24 flex-wrap items-center justify-between overflow-hidden md:overflow-visible md:px-4 lg:justify-center lg:px-2 xl:px-0'>
            <div className='flex h-full w-1/4 items-center justify-start pr-4'>
              <a
                href='/'
                className='flex shrink-0 items-center space-x-2 py-4 font-semibold text-slate-900 lg:py-0'
              >
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 42 38'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                  <path
                    d='M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z'
                    className='ccustom'
                    fill='#3A04DC'
                  ></path>
                </svg>
                <span>Hire Wise</span>
              </a>
            </div>
            <div className='left-0 top-0 flex hidden h-full w-full items-start bg-slate-900 bg-opacity-50 p-4 text-sm md:absolute md:bg-transparent lg:relative lg:flex lg:w-3/4 lg:items-center lg:p-0 lg:text-base'>
              <div className='h-auto w-full flex-col overflow-hidden rounded-lg bg-white lg:relative lg:flex lg:flex-row lg:overflow-visible lg:rounded-none lg:bg-transparent'>
                <a
                  href='/'
                  className='inline-flex h-16 w-auto items-center space-x-2 px-6 font-semibold leading-none text-slate-900 lg:hidden'
                >
                  <img src="/logo.png" alt="ff" className='h-6 w-6 rounded-full' />
                  {/* <svg
                    className='h-6 w-6'
                    viewBox='0 0 42 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                    <path
                      d='M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z'
                      className='ccustom'
                      fill='#3A04DC'
                    ></path>
                  </svg> */}
                  <span>Hire Wise</span>
                </a>
                <div className='flex w-full flex-col items-start justify-center text-center lg:mt-0 lg:w-2/3 lg:flex-row lg:items-center lg:space-x-8'>
                  <a
                    href='/'
                    className='mx-0 ml-6 inline-block w-full py-2 text-left text-sm font-medium text-slate-500 hover:text-slate-500 md:mx-2 md:w-auto md:text-center lg:mx-3 lg:px-0'
                  >
                   Home
                  </a>
                  <a
                    href='/'
                    className='mx-0 ml-6 inline-block w-full py-2 text-left text-sm font-medium text-slate-500 hover:text-slate-500 md:mx-2 md:w-auto md:text-center lg:mx-3 lg:px-0'
                  >
                    Features
                  </a>
                </div>
                <div className='ml-auto flex w-full flex-col items-start justify-end pt-4 lg:w-1/3 lg:flex-row lg:items-center lg:py-0'>
                  <a
                    href='/'
                    className='inline-flex w-full items-center bg-purple-500 px-5 py-3 text-sm leading-4 text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 lg:w-auto lg:rounded-full lg:focus:ring-2'
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className='absolute right-0 flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full bg-white hover:bg-slate-100 lg:hidden lg:items-end'>
              <svg
                className='h-6 w-6 text-slate-700'
                x-show='!showMenu'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
              <svg
                className='h-6 w-6 text-slate-700'
                x-show='showMenu'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                style={{ display: 'none' }}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
