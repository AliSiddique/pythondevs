import React from 'react';
import JobEntries from './JobEntries';
import { db } from '../../prisma/client';

type Props = {};

const getJobPost = async () => {
  const jobPost = await db.jobPost.findMany();
  return jobPost;
};

export default async function FeaturedJobs({}: Props) {
  const jobs = await getJobPost();
  return (
    <div>
      <section>
        <div className='mx-auto max-w-6xl px-8 py-12 md:px-32'>
          <div className='gird-cols-1 grid gap-2 border-b border-gray-200 pb-5 lg:grid-cols-2'>
            <h3 className='text-lg font-semibold leading-6 text-slate-900 lg:text-xl'>
              Featured jobs
            </h3>
            <p className='text-sm text-gray-500'>
              Unleash your potential with exclusive opportunities for
              developers, designers, and marketers in the tech industry.
            </p>
          </div>
          <ul className='divide-y divide-slate-100'>
            {jobs.slice(0, 2).map((job) => (
              <JobEntries
                url={'/jobs/' + job.id}
                type={job.type}
                salary={job.salary as any}
                location={job.location}
                company={job.company_name}
                position={job.title}
                companyLogo={
                  'https://hirewise.lexingtonthemes.com/logos/behance.svg'
                }
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
