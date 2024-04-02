"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { useDebouncedCallback } from "use-debounce"

import { Input } from "@/components/ui/input"

export default function SearchPokemon() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set("query", query)
      params.set("page", "1")
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className='mx-auto max-w-6xl px-8 py-12 md:px-32'>

    <Input
      className="w-2/3"
      placeholder="Search"
      onChange={(e) => {
        handleSearch(e.target.value)
      }}
      defaultValue={searchParams.get("query")?.toString()}
    />
    </div>
  )
}