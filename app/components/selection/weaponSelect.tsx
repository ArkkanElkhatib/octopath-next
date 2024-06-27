import { Traveler } from "@/types/Traveler";
import ToggleSelect from "./toggleSelect";
import SelectionPane from "./selectionPane";
import { useState } from "react";
import equipmentData from "@/lib/data/octopath_traveler_1/equipment.json"
import ActiveWeaponPanel from "./activeWeaponPanel";

interface Props {
  game: string
  traveler: Traveler
}

export default function WeaponSelect({ game, traveler }: Props) {
  const [selectingSword, setSelectingSword] = useState(false)
  const [selectingPolearm, setSelectingPolearm] = useState(false)
  const [selectingDagger, setSelectingDagger] = useState(false)
  const [selectingAxe, setSelectingAxe] = useState(false)
  const [selectingBow, setSelectingBow] = useState(false)
  const [selectingStaff, setSelectingStaff] = useState(false)

  return (
    <>
      {traveler.equipped &&
        <div className='flex flex-col gap-3 text-lg'>

          <ActiveWeaponPanel game={game} traveler={traveler} />

          {traveler.equipped.weapons.sword &&
            <>
              {selectingSword &&
                <SelectionPane
                  title="Swords"
                  equipType="sword"
                  equipped={traveler.equipped.weapons.sword}
                  options={equipmentData.weapons.swords}
                  toggle={() => setSelectingSword(false)}
                />
              }
              <ToggleSelect
                label={"Sword"}
                value={traveler.equipped.weapons.sword.name}
                toggle={() => setSelectingSword(true)}
              />
            </>
          }

          {traveler.equipped.weapons.polearm &&
            <>
              {selectingPolearm &&
                <SelectionPane
                  title="Polearms"
                  equipType="polearm"
                  equipped={traveler.equipped.weapons.polearm}
                  toggle={() => setSelectingPolearm(false)}
                  options={equipmentData.weapons.polearms}
                />
              }
              <ToggleSelect
                label={"Polearm"}
                value={traveler.equipped.weapons.polearm.name}
                toggle={() => setSelectingPolearm(true)}
              />
            </>
          }

          {traveler.equipped.weapons.dagger &&
            <>
              {selectingDagger &&
                <SelectionPane
                  title="Daggers"
                  equipType="dagger"
                  equipped={traveler.equipped.weapons.dagger}
                  toggle={() => setSelectingDagger(false)}
                  options={equipmentData.weapons.daggers}
                />
              }
              <ToggleSelect
                label={"Dagger"}
                value={traveler.equipped.weapons.dagger.name}
                toggle={() => setSelectingDagger(true)}
              />
            </>
          }

          {traveler.equipped.weapons.axe &&
            <>
              {selectingAxe &&
                <SelectionPane
                  title="Axes"
                  equipType="axe"
                  equipped={traveler.equipped.weapons.axe}
                  toggle={() => setSelectingAxe(false)}
                  options={equipmentData.weapons.axes}
                />
              }
              <ToggleSelect
                label={"Axe"}
                value={traveler.equipped.weapons.axe.name}
                toggle={() => setSelectingAxe(true)}
              />
            </>
          }

          {traveler.equipped.weapons.bow &&
            <>
              {selectingBow &&
                <SelectionPane
                  title="Bows"
                  equipType="bow"
                  equipped={traveler.equipped.weapons.bow}
                  toggle={() => setSelectingBow(false)}
                  options={equipmentData.weapons.bows}
                />
              }
              <ToggleSelect
                label={"Bow"}
                value={traveler.equipped.weapons.bow.name}
                toggle={() => setSelectingBow(true)}
              />
            </>
          }

          {traveler.equipped.weapons.staff &&
            <>
              {selectingStaff &&
                <SelectionPane
                  title="Staves"
                  equipType="staff"
                  equipped={traveler.equipped.weapons.staff}
                  toggle={() => setSelectingStaff(false)}
                  options={equipmentData.weapons.staves}
                />
              }
              <ToggleSelect
                label={"Staff"}
                value={traveler.equipped.weapons.staff.name}
                toggle={() => setSelectingStaff(true)}
              />
            </>
          }
        </div>
      }

      {/*traveler.sprites && 
        <div className='flex flex-wrap'>
          {
            Object.keys(traveler.sprites).map((key: string, value: any) => {
              const spriteKey = key as keyof typeof traveler.sprites
              return (
                <>
                  {
                    traveler.sprites &&
                    <div>
                      <img src={traveler.sprites[spriteKey]} alt={key} />
                    </div>
                  }
                </>
              )
            })
          }
        </div>
       */}
    </>
  )
}
