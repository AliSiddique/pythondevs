import React from 'react';
import { db } from '../../../../prisma/client';
import { JobPost } from '@prisma/client';

type Props = {
  params: {
    slug: string;
  }
};
const getJob = async (slug: string) => {
  const res:any = await db.jobPost.findUnique({
    where: {
      id: parseInt(slug),
    },
  });
  
  return res;
}

export default async function page({params}: Props) {
  const job:JobPost = await getJob(params.slug);
  return (
    <div>
      <section>
        <div className='mx-auto max-w-7xl px-8 py-12 md:px-32'>
          <div className='border-b pb-12'>
            <div className='max-w-2xl gap-3 md:inline-flex md:items-center'>
              <div className='h-12 w-12 flex-none'>
                <img
                  className='inset-0 h-full w-full rounded-full object-cover'
                  src={job.company_logo}
                />
              </div>
              <h2 className='font-display mt-8 text-3xl font-normal tracking-tight text-slate-900 md:mt-0 lg:text-4xl'>
                SWR at <span className='italic'>{job.company_name}</span>
              </h2>
            </div>
            <dl className='mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 lg:grid-cols-5'>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-map-pin'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
                    <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z'></path>
                  </svg>
                  Location
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  {job.location}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-activity'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M3 12h4l3 8l4 -16l3 8h4'></path>
                  </svg>
                  Department
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                 {job.department}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-stack-pop'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5'></path>
                    <path d='M4 15l8 4l8 -4'></path>
                    <path d='M12 11v-7'></path>
                    <path d='M9 7l3 -3l3 3'></path>
                  </svg>
                  Level
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  Senior
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-clock-bolt'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M20.984 12.53a9 9 0 1 0 -7.552 8.355'></path>
                    <path d='M12 7v5l3 3'></path>
                    <path d='M19 16l-2 3h4l-2 3'></path>
                  </svg>
                  Type
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  {job.type}
                </dd>
              </div>
              <div className='flex flex-col gap-y-3 border-l pl-6'>
                <dt className='inline-flex items-center gap-2 text-base leading-7 text-slate-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-coin'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1'></path>
                    <path d='M12 7v10'></path>
                  </svg>
                  Salary
                </dt>
                <dd className='text-base font-semibold tracking-tight text-slate-900'>
                  £{job.salary}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='mx-auto max-w-7xl px-8 py-12 md:px-32'>
          <div className='prose-a:text-accent-500 prose-li:marker:text-accent-500 prose text-slate-500 prose-headings:font-semibold prose-headings:text-slate-900 hover:prose-a:text-slate-900 prose-blockquote:border-l-black prose-blockquote:text-slate-500 prose-code:text-slate-900 prose-pre:border'>
            <main>
              <section>
                <h2>Responsibilities</h2>
                <ul>
                  <li>
                    Drive creative and strategic initiatives to enhance customer
                    engagement.
                  </li>
                  <li>
                    Collaborate with cross-functional teams to develop and
                    implement marketing campaigns.
                  </li>
                  <li>
                    Analyze market trends and competitor activities to identify
                    new business opportunities.
                  </li>
                  <li>
                    Foster strong relationships with clients, ensuring their
                    needs are met and expectations exceeded.
                  </li>
                </ul>
              </section>

              <section>
                <h2>Job Requirements</h2>
                <ul>
                  <li>
                    A minimum of [X] years of experience in a similar role.
                  </li>
                  <li>Strong communication and interpersonal skills.</li>
                  <li>Proficiency in [specific software/tools].</li>
                  <li>
                    Proven track record of successfully managing projects and
                    meeting deadlines.
                  </li>
                </ul>
                <p>
                  If you are a motivated and results-driven professional looking
                  to contribute to a dynamic team, we would love to hear from
                  you! Apply now and embark on an exciting career journey with
                  us.
                </p>
              </section>
            </main>
          </div>
          <div className='py-6'>
            <a
              href={job.apply_link ?? ""}
              className='inline-flex w-full items-center rounded-full bg-purple-500 px-5 py-3 text-sm leading-4 text-white duration-200 hover:bg-purple-50 hover:text-purple-500 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:ring-offset-2 md:w-auto md:focus:ring-2'
            >
              Apply now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
