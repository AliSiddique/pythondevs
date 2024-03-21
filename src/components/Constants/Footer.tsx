import React from 'react';
import { config } from '../../../config';

type Props = {};

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  name: string;
  url: string;
}

let footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      {
        name: 'Features',
        url: '/features',
      },
      {
        name: 'Integrations',
        url: '/integrations',
      },
      {
        name: 'Pricing',
        url: '/pricing',
      },
      {
        name: 'FAQ',
        url: '/faq',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Blog',
        url: '/blog',
      },
      {
        name: 'Careers',
        url: '/careers',
      },
      {
        name: 'Contact',
        url: '/contact',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Privacy Policy',
        url: '/privacy-policy',
      },
      {
        name: 'Terms of Service',
        url: '/terms-of-service',
      },
    ],
  },
];

export default function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <div>
       <footer className='relative border-t bg-white'>
        <div className='mx-auto max-w-7xl px-8 py-12 md:px-32'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='text-slate-900 xl:col-span-3'>
              <a
                className='inline-flex items-center gap-2 text-xl font-semibold tracking-tighter text-slate-900'
                href='/'
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
            <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-2 lg:col-span-3 lg:mt-24'>
              <div className='grid gap-8 lg:grid-cols-2'>
                <div>
                  <h3 className='text-xl font-normal text-slate-900'>
                    Navigation
                  </h3>
                  <ul className='mt-4 space-y-2' role='list'>
                    <li>
                      <a
                        className='inline-flex items-center text-sm font-normal text-slate-500 hover:text-purple-500'
                        href='/system/overview'
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-sm font-normal text-slate-500 hover:text-purple-500'
                        href='/system/styleguide'
                      >
                        Style guide
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-normal text-slate-900'>
                    More themes
                  </h3>
                  <ul className='mt-4 space-y-2' role='list'>
                    <li>
                      <a
                        className='text-sm font-normal text-slate-500 hover:text-purple-500'
                        href='https://lexingtonthemes.com'
                      >
                        Lexington Themes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='grid gap-8 lg:grid-cols-2'>
                <div>
                  <h3 className='text-xl font-normal text-slate-900'>
                    Stay updated
                  </h3>
                  <ul className='mt-4 space-y-2' role='list'>
                    <li>
                      <a
                        className='text-sm font-normal text-slate-500 hover:text-purple-500'
                        href='https://www.lexingtonthemes.com/license'
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-sm font-normal text-slate-500 hover:text-purple-500'
                        href='https://lexingtonthemes.com/documentation/quick-start/'
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-normal text-slate-900'>
                    Socials
                  </h3>
                  <ul className='mt-4 space-y-2' role='list'>
                    <li>
                      <a
                        className='text-sm font-normal text-slate-500 hover:text-purple-500'
                        href='https://twitter.com/lexingtonthemes'
                      >
                        @lexingtonthemes
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-sm font-normal text-slate-500 hover:text-purple-500'
                        href='https://twitter.com/Mike_Andreuzza'
                      >
                        @Mike_Andreuzza
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-full mt-12 max-w-xl md:col-span-1 lg:mt-24'>
            <div className='flex flex-col gap-6 md:flex-row'>
              <a
                className='inline-flex w-full items-center justify-between rounded-full bg-purple-500 px-5 py-3 text-center text-sm leading-4 text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:focus:ring-2 lg:w-auto'
                href='/board/post-job'
              >
                Post a featured job &nbsp; <span>&rarr;</span>
              </a>
              <a
                className='inline-flex w-full items-center justify-between rounded-full border bg-white px-5 py-3 text-center text-sm leading-4 text-purple-500 duration-200 hover:bg-slate-50 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:focus:ring-2 lg:w-auto'
                href='/board/post-job'
              >
                Post a free job &nbsp; <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl px-8 py-12 md:px-32'>
          <div className='border-t pt-6 sm:flex sm:items-center sm:justify-between'>
            <h3 className='text-xs leading-6 text-slate-400'>
              © 2023 Lexington themes Ltd. All rights reserved.
            </h3>
            <div className='mt-3 flex items-center sm:ml-4 sm:mt-0'>
              <div className='flex items-center space-x-6'>
                <a className='text-slate-500 hover:text-purple-500' href='#'>
                  <span className='sr-only'>Instagram</span>
                  <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-brand-instagram'
                    stroke='currentColor'
                    stroke-width='2'
                    height='16'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    width='16'
                  >
                    <path d='M0 0h24v24H0z' fill='none' stroke='none'></path>
                    <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z'></path>
                    <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
                    <path d='M16.5 7.5l0 .01'></path>
                  </svg>
                </a>
                <a className='text-slate-500 hover:text-purple-500' href='#'>
                  <span className='sr-only'>Twitter</span>
                  <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-brand-twitter-filled'
                    stroke='currentColor'
                    stroke-width='2'
                    height='16'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    width='16'
                  >
                    <path d='M0 0h24v24H0z' fill='none' stroke='none'></path>
                    <path
                      d='M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z'
                      fill='currentColor'
                      stroke-width='0'
                    ></path>
                  </svg>
                </a>
                <a className='text-slate-500 hover:text-purple-500' href='#'>
                  <span className='sr-only'>GitHub</span>
                  <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-brand-github'
                    stroke='currentColor'
                    stroke-width='2'
                    height='16'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    width='16'
                  >
                    <path d='M0 0h24v24H0z' fill='none' stroke='none'></path>
                    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
