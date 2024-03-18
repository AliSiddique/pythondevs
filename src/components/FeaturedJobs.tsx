import React from 'react'
import JobEntries from './JobEntries'
import { db } from '../../prisma/client'

type Props = {}



    const getJobPost = async () => {
      const jobPost = await db.jobPost.findMany()
      return jobPost
  }
  
export default async function FeaturedJobs({}: Props) {
  const jobs = await getJobPost()
  return (
    <div>

<section>
  <div className="mx-auto px-8 md:px-32 py-12 max-w-6xl">
    <div
      className="border-b border-gray-200 pb-5 grid gird-cols-1 lg:grid-cols-2 gap-2"
    >
      <h3 className="text-lg lg:text-xl font-semibold leading-6 text-slate-900">
        Featured jobs
      </h3>
      <p className="text-sm text-gray-500">
        Unleash your potential with exclusive opportunities for developers,
        designers, and marketers in the tech industry.
      </p>
    </div>
    <ul className="divide-y divide-slate-100">
      {
        jobs
          .slice(0,2)
          .map((job) => (
            <JobEntries
              url={"/openjobs/" + job.title}
              type={job.type}
              salary={job.salary as any}
              location={job.location}
              company={job.company_name}
              position={job.title}
              companyLogo={"https://hirewise.lexingtonthemes.com/logos/behance.svg"}
            />
          ))
      }
    </ul>
  </div>
</section>
    </div>
  )
}