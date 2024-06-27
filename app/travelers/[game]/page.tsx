'use client'

import MenuBar from "@/app/components/menubar/menuBar"
import MenuButton from "@/app/components/menubar/menuButton"
import { IRootState } from "@/lib/stores"
import { Traveler } from "@/types/Traveler"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useSelector } from "react-redux"

export default function GameTravelers() {
  const { game } = useParams<{ game: string }>()

  var travelers: Traveler[] = []
  const travelersStore = useSelector((store: IRootState) => store.travelers)
  switch (game) {
    case "ot1":
      travelers = travelersStore.ot1Travelers
      break;
    case "ot2":
      travelers = travelersStore.ot2Travelers
      break;
    default:
      return notFound()
  }

  return (
    <div>
      <MenuBar>
        <MenuButton>
          <Link href={'/travelers/'} className="w-full h-full p-3">
            <img src="/back.svg" alt="back" />
          </Link>
        </MenuButton>
      </MenuBar>
      <div className='flex justify-center items-center h-[70vh]'>
        <div className='flex flex-col gap-3 text-center'>
          <h4 className='text-3xl underline'>Travelers</h4>
          {
            travelers.map((traveler, key) => {
              return <Link
                key={key}
                href={`/travelers/${game}/${traveler.slug}`}
                className='hover:underline'
              >
                {traveler.name}
              </Link>
            })
          }
        </div>
      </div>
    </div>
  )
}
