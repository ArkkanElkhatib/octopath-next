import Image from "next/image"
import { setSecondaryJob } from "@/lib/stores/travelers"
import { useDispatch } from "react-redux"

interface Props {
  game: string
  travelerName: string
  src: string
  value: string
  width: number
  height: number
  active: boolean
}

export default function JobIcon({ game, travelerName, src, value, width, height, active = false }: Props) {
  const border = active ? "border-2 border-amber-600" : "border border-zinc-300"
  const dispatch = useDispatch()

  const handleSetSecondaryJob = () => {
    dispatch(setSecondaryJob({
      game: game,
      travelerName: travelerName,
      job: value
    }))
  }

  return (
    <button onClick={handleSetSecondaryJob} className="flex justify-center items-center">
      <Image
        src={src}
        alt={value}
        width={width}
        height={height}
        className={`hover:cursor-pointer w-[${width}px] h-[${height}px] ${border} p-px`}
      />
    </button>
  )
}
