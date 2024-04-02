import { Suspense } from "react"

import { GetJobs } from "./actions"
import InfiniteCardList from "@/components/infinite-card-list"
import SearchPokemon from "@/components/Search"
import { Skeleton } from "@/components/ui/skeleton"

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const search = searchParams?.query || ""
  const limit = 20

  const { data: initialData } = await GetJobs({ search, limit })

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <div className="grow">
          <SearchPokemon />
        </div>
      </div>
      <Suspense key={search} fallback={<Skeleton />}>
        <InfiniteCardList search={search} initialData={initialData} limit={limit} />
      </Suspense>
    </>
  )
}