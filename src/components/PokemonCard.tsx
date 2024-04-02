import Image from "next/image"

import { Card, CardContent, CardHeader } from "./ui/card"

interface IPokemon {
  id: number
  name: string
    image: string
}

export default function PokemonCard({ id, name ,image}: IPokemon) {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="mt-2 flex justify-center">
            <h2 className="text-2xl font-bold">{name}</h2>
          </div>
        </CardHeader>
        <CardContent>
          <img
            alt={name}
            className="mx-auto"
            src={image}
            width="100"
            height="100"
          />
        </CardContent>
      </Card>
    </>
  )
}