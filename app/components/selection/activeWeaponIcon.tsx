import Image from "next/image"
import { setActiveWeapon } from "@/lib/stores/travelers"
import { useDispatch } from "react-redux"

interface Props {
  game: string
  travelerName: string
  src: string
  value: string
  width: number
  height: number
  active: boolean
  enabled: boolean
}

export default function ActiveWeaponIcon({ game, travelerName, src, value, width, height, active, enabled = true }: Props) {
  const dispatch = useDispatch()

  const border = active ? "border-2 border-amber-600" : "border border-zinc-300"
  if (enabled) {
    active = false
  }

  const handleSetActiveWeapon = () => {
    dispatch(setActiveWeapon({
      game: game,
      travelerName: travelerName,
      weaponType: value
    }))
  }

  return (
    <>
      {enabled &&
        <button onClick={handleSetActiveWeapon} className="flex justify-center items-center">
          <Image
            src={src}
            alt={value}
            width={width}
            height={height}
            style={{ objectFit: "cover" }}
            className={`hover:cursor-pointer w-[${width}px] h-[${height}px] ${border} p-px`}
          />
        </button>
      }
      {
        !enabled &&
        <button>
          <Image
            src={src}
            alt={value}
            width={width}
            height={height}
            style={{ objectFit: "cover" }}
            className={`hover:cursor-pointer w-[${width}px] h-[${height}px] ${border} p-px opacity-70`}
          />
        </button>
      }
    </>
  )
}
