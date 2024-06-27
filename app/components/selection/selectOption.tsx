import { Equipment, SupportSkill } from "@/types/Equipped"
import { useDispatch } from "react-redux"
import { notFound, useParams } from "next/navigation"
import { equipTraveler } from "@/lib/stores/travelers"

interface Props {
  equippable: Equipment | SupportSkill
  active?: boolean
  equipType: string
}

const LabelMap = {
  "hp": "Max. HP",
  "sp": "Max. SP",
  "patk": "Phys. Atk.",
  "eatk": "Elem. Atk.",
  "pdef": "Phys. Def.",
  "edef": "Elem. Def.",
  "accuracy": "Accuracy",
  "speed": "Speed",
  "critical": "Critical",
  "evasion": "Evasion",
}

export default function SelectOption({ equippable, active = false, equipType }: Props) {
  const { game, slug } = useParams<{ game: string, slug: string }>()
  const dispatch = useDispatch()
  const handleOptionClick = () => {
    dispatch(equipTraveler({
      game: game,
      slug: slug,
      equipType: equipType,
      equipName: equippable.name
    }))
  }

  if (!game || !slug) {
    return notFound()
  }
  const borderColorClass = active ? "border-amber-600" : "border-gray-300"
  const hoverOpacity = active ? "hover:opacity-100" : "hover:opacity-80"

  return (
    <button className={
      `flex flex-col gap-3 w-full border ${borderColorClass} rounded-xl px-4 pt-2 pb-4 ${hoverOpacity}`}
      onClick={handleOptionClick}
    >
      <div className='flex flex-col gap-2 w-full'>
        <span className='text-2xl text-left'>{equippable.name}</span>
        <div className='flex gap-10 w-full text-left'>
          {"stats" in equippable &&
            Object.keys(equippable.stats).length > 0 &&
            <div className='flex flex-col text-left justify-center'>
              <>
                {
                  Object.keys(equippable.stats).map((key: string, _: number) => {
                    const labelKey: keyof typeof LabelMap = key as keyof typeof LabelMap
                    const statsKey: keyof typeof equippable.stats = key as keyof typeof equippable.stats

                    if (key in equippable.stats) {
                      return <span key={key} className='text-sm text-left whitespace-pre'>
                        {LabelMap[labelKey].padEnd(11)}: {equippable.stats[statsKey]}
                      </span>
                    }
                  })
                }
              </>
            </div>
          }
          <span className='text-left text-sm'>{equippable.effect}</span>
        </div>
      </div>
    </button>
  )
}
