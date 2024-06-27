import { Traveler } from "@/types/Traveler";

interface Props {
  travelers: Traveler[]
}

export default function StatsPanel({ travelers }: Props) {
  return (
    <div className="flex flex-wrap w-full text-md whitespace-pre justify-center gap-x-10 gap-y-5">
      <div className='w-[40%]'>
        <span>Max. HP.   : </span>
        <span className="text-amber-500">9999</span>
      </div>
      <div className='w-[40%]'>
        <span>Max. SP.   : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Phys. Atk. : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Elem. Atk. : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Phys. Def. : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Elem. Def. : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Accuracy   : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Speed      : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Critical   : </span>
        <span className="text-amber-500">999</span>
      </div>
      <div className='w-[40%]'>
        <span>Evasion    : </span>
        <span className="text-amber-500">999</span>
      </div>

    </div>
  )
}
