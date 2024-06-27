import { Traveler } from "@/types/Traveler"
import ActiveWeaponIcon from "./activeWeaponIcon"

interface Props {
  game: string
  traveler: Traveler
}

export default function ActiveWeaponPanel({ game, traveler }: Props) {
  const iconsDir = "/icons/general/weapons"

  const weaponIconMap = {
    "sword": `${iconsDir}/sword.png`,
    "polearm": `${iconsDir}/polearm.png`,
    "dagger": `${iconsDir}/dagger.png`,
    "axe": `${iconsDir}/axe.png`,
    "bow": `${iconsDir}/bow.png`,
    "staff": `${iconsDir}/staff.png`
  }

  return (
    <div className='grid grid-cols-6 gap-2 justify-center'>
      {Object.keys(weaponIconMap).map((weaponType, key) => {
        const weaponTypeKey: keyof typeof weaponIconMap = weaponType as keyof typeof weaponIconMap
        const active = weaponType == traveler.active ? true : false

        let enabled = false
        if (traveler.equipped) {
          const travelerWeaponsKey: keyof typeof traveler.equipped.weapons = weaponType as keyof typeof traveler.equipped.weapons
          enabled = traveler.equipped.weapons[travelerWeaponsKey] ? true : false
        }

        return (
          <ActiveWeaponIcon
            key={key}
            game={game}
            travelerName={traveler.name}
            src={weaponIconMap[weaponTypeKey]}
            value={weaponType}
            height={45}
            width={45}
            active={active}
            enabled={enabled}
          />
        )
      })
      }
    </div>
  )
}
