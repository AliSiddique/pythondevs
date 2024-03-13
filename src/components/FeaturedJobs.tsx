import React from 'react'
import JobEntries from './JobEntries'

type Props = {}

let allPosts = [
    {
        slug: "frontend-developer",
        data: {
        type: "Full-time",
        salary: "£60,000",
        location: "London, UK",
        company: "Vercel",
        position: "Frontend Developer",
        companyLogo: {
            url: "https://hirewise.lexingtonthemes.com/logos/spotify.svg"
        }
        }
    },
    {
        slug: "backend-developer",
        data: {
        type: "Full-time",
        salary: "£60,000",
        location: "London, UK",
        company: "Vercel",
        position: "Backend Developer",
        companyLogo: {
            url: "https://hirewise.lexingtonthemes.com/logos/github.svg"
        }
        }
    },

]

export default function FeaturedJobs({}: Props) {
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
        allPosts
          .slice(0,2)
          .map((post) => (
            <JobEntries
              url={"/openjobs/" + post.slug}
              type={post.data.type}
              salary={post.data.salary}
              location={post.data.location}
              company={post.data.company}
              position={post.data.position}
              companyLogo={post.data.companyLogo.url}
            />
          ))
      }
    </ul>
  </div>
</section>
    </div>
  )
}