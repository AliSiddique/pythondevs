"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {}

export default function page({}: Props) {
    const search = useSearchParams()
console.log(search.get('q'))
  return (
    <div>
        {search.get('q')}
    </div>
  )
}