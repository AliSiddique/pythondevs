"use client"
import React from 'react';
import JobEntries from './JobEntries';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

type Props = {};

let allPosts = [
  {
    slug: 'frontend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Frontend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/spotify.svg',
      },
    },
  },
  {
    slug: 'backend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Backend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/github.svg',
      },
    },
  },
  {
    slug: 'fullstack-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Fullstack Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/behance.svg',
      },
    },
  },
  {
    slug: 'frontend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Frontend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/spotify.svg',
      },
    },
  },
  {
    slug: 'backend-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Backend Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/github.svg',
      },
    },
  },
  {
    slug: 'fullstack-developer',
    data: {
      type: 'Full-time',
      salary: '£60,000',
      location: 'London, UK',
      company: 'Vercel',
      position: 'Fullstack Developer',
      companyLogo: {
        url: 'https://hirewise.lexingtonthemes.com/logos/behance.svg',
      },
    },
  },
];

export default function LatestJobs({}: Props) {

  const { ref, inView } = useInView()

  const { isLoading, isError, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: async ({ pageParam = '' }) => {
        const res = await axios.get('/api/get-jobs?cursor=' + pageParam)
        console.log(res.data)
        return res.data
      },
  
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,

      
    })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  if (isLoading) return <div className="loading">Loading...</div>
  if (isError) return <div>Error! {JSON.stringify(error)}</div>
  
  return (
    <section>
      {/* <div className='mx-auto max-w-6xl px-8 py-12 md:px-32'>
        <div className='gird-cols-1 grid gap-2 border-b border-gray-200 pb-5 lg:grid-cols-2'>
          <h3 className='text-lg font-semibold leading-6 text-slate-900 lg:text-xl'>
            Latest jobs
          </h3>
          <p className='text-sm text-gray-500'>
            Stay updated with the newest job openings for developers, designers,
            and marketers in the tech industry. Find your next career move and
            stay ahead of the curve.
          </p>
        </div>

        <ul className='divide-y divide-slate-100'>
          {allPosts.map((post) => (
            <JobEntries
              url={'/companies/' + post.slug}
              type={post.data.type}
              salary={post.data.salary}
              location={post.data.location}
              company={post.data.company}
              position={post.data.position}
              companyLogo={post.data.companyLogo.url}
            />
          ))}
        </ul>
      </div> */}
      {data &&
        data.pages.map((page:any) => {
          return (
            <React.Fragment key={page.nextId ?? 'lastPage'}>
              {page.posts.map((post: { id: number; title: string; createdAt: Date }) => (
                <div className="post" key={post.id}>
                  <p>{post.id}</p>
                  <p>{post.title}</p>
                </div>
              ))}
            </React.Fragment>
          )
        })}

      {isFetchingNextPage ? <div className="loading">Loading...</div> : null}

      <span style={{ visibility: 'hidden' }} ref={ref}>
        intersection observer marker
      </span>
    </section>
  );
}
