"use client"
import React from 'react';
import { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';

type Props = {
  company: string;
  companyLogo: string;
  position: string;
  url: string;
  type: string;
  salary: string;
  location: string;
  color?: string;
  setColor?: React.Dispatch<React.SetStateAction<string>>;
  tags?: string[];
  apply_link: string;
  id: string;
  title: string;
};

export default function JobEntries({
  company,
  companyLogo,
  position,
  url,
  type,
  salary,
  location,
  color,
  setColor,
  tags,
  apply_link,
  id,
  title,
}: Props) {
    
  return (
//     <div className={``}>
//       <li
//  className={`bg-[${color}] `}>
//         <div className={`group relative py-6 sm:rounded-2xl bg-[${color}]  `}>
//         <div style={{background:color}} className={`absolute -inset-x-4 -inset-y-px  opacity-100 duration-200 group-hover:opacity-100 sm:-inset-x-6 lg:-inset-x-8 ${color}`}></div>
//           <div className='relative flex items-center '>
//             <div className={` bg-[${color}]  relative h-[3.125rem] w-[3.125rem] flex-none sm:h-[3.75rem] sm:w-[3.75rem]`}>
//               <img
//                 className='absolute inset-0 h-full w-full rounded-full object-cover'
//                 src={companyLogo ?? "https://via.placeholder.com/150"}
//                 alt=''
//               />
//               <div className='absolute inset-0 rounded-full ring-1 ring-inset ring-black/[0.08]'></div>
//             </div>
//             <dl className='ml-4 flex flex-auto flex-wrap gap-x-2 gap-y-1 overflow-hidden sm:ml-6 sm:grid sm:grid-cols-[auto_1fr_auto_auto] sm:items-center'>
//               <div className='col-span-2 mr-2.5 flex-none sm:mr-0'>
//                 <dt className='sr-only'>Company</dt>
//                 <dd className='text-xs font-semibold leading-6 text-slate-500'>
//                   {company} {title}
//                 </dd>
//               </div>
//               <div className='col-start-3 row-start-2 -ml-2.5 flex-auto sm:ml-0 sm:pl-6'>
//                 <dt className='sr-only'>Location</dt>
//                 <dd className='flex items-center text-xs leading-6 text-slate-500'>
//                   <svg
//                     viewBox='0 0 2 2'
//                     aria-hidden='true'
//                     className='mr-2 h-0.5 w-0.5 flex-none fill-slate-400 sm:hidden'
//                   >
//                     <circle cx='1' cy='1' r='1'></circle>
//                   </svg>
//                   {location}
//                   <Button >
//                     <Link href={apply_link ?? ""}>
//                       Apply
//                     </Link>
//                   </Button>
//                 </dd>
//               </div>
//               <div className='col-span-2 col-start-1 w-full flex-none'>
//                 <dt className='sr-only'>Title</dt>
//                 <dd className='text-base font-semibold leading-6 text-slate-900'>
//                   <a href={`/jobs/${id}`}>
//                     <span        
//  className={`absolute bg-[${color}] -inset-x-4 inset-y-[calc(-1*(theme(spacing.6)+1px))] sm:-inset-x-6 sm:rounded-2xl lg:-inset-x-8`}></span>
//                     {title}
//                   </a>
//                 </dd>
//               </div>
//               <div className='col-start-1 mr-2.5 flex-none'>
//                 <dt className='sr-only'>Type</dt>
//                 <dd className='text-xs leading-6 text-slate-500'>{type}</dd>
//               </div>
//               <div className='col-span-3 -ml-2.5 flex-none'>
//                 <dt className='sr-only'>Salary</dt>
//                 <dd className='flex items-center text-xs leading-6 text-slate-500'>
//                   <svg
//                     viewBox='0 0 2 2'
//                     aria-hidden='true'
//                     className='mr-2 h-0.5 w-0.5 flex-none fill-slate-400'
//                   >
//                     <circle cx='1' cy='1' r='1'></circle>
//                   </svg>
//                   {salary} 
//                   {tags?.map((tag) => (
//                     <Badge key={tag} variant='secondary' >
//                       {tag}
//                     </Badge>
//                 ))}
//                 </dd>
               
//               </div>
//             </dl>
//           </div>
//         </div>
//       </li>
//     </div>
<div>
  <div className="group relative py-6 sm:rounded-2xl">
    <div
      className="absolute -inset-x-4 -inset-y-px bg-slate-50 opacity-0 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl lg:-inset-x-8 duration-200"
    >
    </div>
    <div className="relative flex items-center">
      <div
        className="relative h-[3.125rem] w-[3.125rem] sm:h-[3.75rem] sm:w-[3.75rem] flex-none"
      >
        <img
          className="absolute inset-0 h-full w-full rounded-full object-cover"
          src={companyLogo ?? "/logo.png"}
          alt=""
        />
        <div
          className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/[0.08]"
        >
        </div>
      </div>
      <dl
        className="ml-4 flex flex-auto flex-wrap gap-y-1 gap-x-2 overflow-hidden sm:ml-6 sm:grid sm:grid-cols-[auto_1fr_auto_auto] sm:items-center"
      >
        <div className="col-span-2 mr-2.5 flex-none sm:mr-0">
          <dt className="sr-only">Company</dt>
          <dd className="text-xs font-semibold leading-6 text-slate-500">
            {company}
          </dd>
        </div>
        <div className="col-start-3 row-start-2 -ml-2.5 flex-auto sm:ml-0 sm:pl-6">
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center text-xs leading-6 text-slate-500">
            
            {location}
          </dd>
          <div className="col-span-3 -ml-2.5 flex-none">
          <dt className="sr-only">Salary</dt>
          <dd className="flex items-center text-xs leading-6 text-slate-500">
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mr-2 h-0.5 w-0.5 flex-none fill-slate-400"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            {salary}
          </dd>
        </div>
        </div>
        <div className="col-span-2 col-start-1 w-full flex-none">
          <dt className="sr-only">Title</dt>
          <dd className="text-base font-semibold leading-6 text-slate-900">
            <a href={`/jobs/${id}`}>
              <span
                className="absolute -inset-x-4 inset-y-[calc(-1*(theme(spacing.6)+1px))] sm:-inset-x-6 sm:rounded-2xl lg:-inset-x-8"
              ></span>
              {title} 
            </a>
          </dd>
        </div>
        <div className="col-start-1 mr-2.5 flex-none">
          <dt className="sr-only">Tech</dt>
          <dd className="text-xs leading-6 text-slate-500">
            {tags?.slice(0, 3).map((tag) => (
              <div key={tag} className="mr-2 ">
              <Badge key={tag} className={`bg-[#4584b6] `}>
                {tag}
              </Badge>
              </div>
            ))}
          </dd>
        </div>

      </dl>
    </div>
  </div>
</div>

  );
}
