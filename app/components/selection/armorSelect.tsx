import { Traveler } from "@/types/Traveler";
import ToggleSelect from "./toggleSelect";
import SelectionPane from "./selectionPane";
import { useState } from "react";
import equipmentData from "@/lib/data/octopath_traveler_1/equipment.json"

interface Props {
  traveler: Traveler
}

export default function ArmorSelect({ traveler }: Props) {
  const [selectingShield, setSelectingShield] = useState(false)
  const [selectingHeadgear, setSelectingHeadgear] = useState(false)
  const [selectingBodyArmor, setSelectingBodyArmor] = useState(false)
  const [selectingAccessory1, setSelectingAccessory1] = useState(false)
  const [selectingAccessory2, setSelectingAccessory2] = useState(false)

  return (
    <>
      {traveler.equipped &&
        <div className='flex flex-col gap-3 text-lg'>
          {selectingShield &&
            <SelectionPane
              title="Shields"
              equipType="shield"
              equipped={traveler.equipped.shield}
              toggle={() => setSelectingShield(false)}
              options={equipmentData.shields}
            />
          }
          <ToggleSelect
            label={"Shield"}
            value={traveler.equipped.shield.name}
            toggle={() => setSelectingShield(true)}
          />

          {selectingHeadgear &&
            <SelectionPane
              title="Headgears"
              equipType="headgear"
              equipped={traveler.equipped.headgear}
              toggle={() => setSelectingHeadgear(false)}
              options={equipmentData.headgears}
            />
          }
          <ToggleSelect
            label={"Headgear"}
            value={traveler.equipped.headgear.name}
            toggle={() => setSelectingHeadgear(true)}
          />

          {selectingBodyArmor &&
            <SelectionPane
              title="Body Armors"
              equipType="body armor"
              equipped={traveler.equipped.body_armor}
              toggle={() => setSelectingBodyArmor(false)}
              options={equipmentData.body_armors}
            />
          }
          <ToggleSelect
            label={"Body Armor"}
            value={traveler.equipped.body_armor.name}
            toggle={() => setSelectingBodyArmor(true)}
          />

          {selectingAccessory1 &&
            <SelectionPane
              title="Accessories"
              equipType="accessory 1"
              equipped={traveler.equipped.accessory_1}
              toggle={() => setSelectingAccessory1(false)}
              options={equipmentData.accessories}
            />
          }
          <ToggleSelect
            label={"Accessory 1"}
            value={traveler.equipped.accessory_1.name}
            toggle={() => setSelectingAccessory1(true)}
          />

          {selectingAccessory2 &&
            <SelectionPane
              title="Accessories"
              equipType="accessory 2"
              equipped={traveler.equipped.accessory_2}
              toggle={() => setSelectingAccessory2(false)}
              options={equipmentData.accessories}
            />
          }
          <ToggleSelect
            label={"Accessory 2"}
            value={traveler.equipped.accessory_2.name}
            toggle={() => setSelectingAccessory2(true)}
          />
        </div>
      }
    </>
  )
}
