import { Traveler } from "@/types/Traveler";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

interface Props {
  travelers: Traveler[]
}

export default function RosterSelect({ travelers }: Props) {
  const { game } = useParams<{ game: string }>()

  if (!game) {
    return notFound()
  }

  return (
    <div className='flex w-98 justify-center'>
      <div className='grid grid-cols-4 w-full justify-center items-end gap-5 h-[80px]'>
        {
          travelers.map((traveler, key) => {
            return (
              <Link
                key={key}
                href={`/travelers/${game}/${traveler.slug}`}
                className="w-full flex justify-center"
              >
                <img
                  src={traveler.sprites[traveler.secondary_job as keyof typeof traveler.sprites]}
                  alt={traveler.name}
                  className="max-w-[40px]"
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
