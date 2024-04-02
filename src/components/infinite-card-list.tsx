"use client"

import { useEffect, useState } from "react"

import type { JobPost } from "@prisma/client"
import { Loader2 } from "lucide-react"
import { useInView } from "react-intersection-observer"

import { GetJobs } from "@/app/search/actions"
import PokemonCard from "./PokemonCard"
import JobEntries from "./JobEntries"
import JobLoading from "./JobLoading"


interface IProps {
  initialData: any[]
  search: string
  limit: number
}

export default function InfiniteCardList({ initialData, search, limit }: IProps) {
  const [data, setData] = useState(initialData)
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()
  const [isDisable, setDisable] = useState(false)

  async function loadMoreData() {
    const next = page + 1
    const offset = next * limit
    const { data: newData } = await GetJobs({ search, offset, limit })

    if (newData.length) {
      setPage(next)
      setData((prev: any[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...newData,
      ])
    } else {
      setDisable(true)
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <>
   <div className='mx-auto max-w-6xl px-8 py-12 md:px-32'>
        {data.map((p) => (
        //   <PokemonCard key={p.id} id={p.id} name={p.title} image={p.company_logo} />
          <JobEntries
            url={'/jobs/' + p.id}
            type={p.type}
            salary={p.salary as any}
            location={p.location}
            company={p.company_name}
            position={p.title}
            companyLogo={p.company_logo}
            color={p.color ?? 'bg-slate-500'}
            tags={p.tags ?? []}
            apply_link={p.apply_link ?? 'https://hirewise.lexingtonthemes.com/'}
            id={p.id as any}
            title={p.title}
            />
        ))}
      </div>
      {!isDisable ? (
        <div ref={ref} className="mt-6 flex flex-col items-center justify-center">
          {/* <Loader2 className="animate-spin" size={48} /> */}
          <JobLoading />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}