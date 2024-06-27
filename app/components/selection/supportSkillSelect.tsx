import { Traveler } from "@/types/Traveler";
import ToggleSelect from "./toggleSelect";
import SelectionPane from "./selectionPane";
import { useState } from "react";
import skillData from "@/lib/data/octopath_traveler_1/skills.json"

interface Props {
  traveler: Traveler
}

export default function SupportSkillSelect({ traveler }: Props) {
  const [selectingSupportSkill1, setSelectingSupportSkill1] = useState(false)
  const [selectingSupportSkill2, setSelectingSupportSkill2] = useState(false)
  const [selectingSupportSkill3, setSelectingSupportSkill3] = useState(false)
  const [selectingSupportSkill4, setSelectingSupportSkill4] = useState(false)

  return (
    <>
      {traveler.equipped &&
        <div className='flex flex-col gap-3 text-lg'>
          {selectingSupportSkill1 &&
            <SelectionPane
              title="Support Skills"
              equipType="support skill 1"
              equipped={traveler.equipped.supportSkill1}
              toggle={() => setSelectingSupportSkill1(false)}
              options={skillData.support_skills}
            />
          }
          <ToggleSelect
            label={"Skill 1"}
            value={traveler.equipped.supportSkill1.name}
            toggle={() => { setSelectingSupportSkill1(true) }}
          />

          {selectingSupportSkill2 &&
            <SelectionPane
              title="Support Skills"
              equipType="support skill 2"
              equipped={traveler.equipped.supportSkill2}
              toggle={() => setSelectingSupportSkill2(false)}
              options={skillData.support_skills}
            />
          }
          <ToggleSelect
            label={"Skill 2"}
            value={traveler.equipped.supportSkill2.name}
            toggle={() => { setSelectingSupportSkill2(true) }}
          />

          {selectingSupportSkill3 &&
            <SelectionPane
              title="Support Skills"
              equipType="support skill 3"
              equipped={traveler.equipped.supportSkill3}
              toggle={() => setSelectingSupportSkill3(false)}
              options={skillData.support_skills}
            />
          }
          <ToggleSelect
            label={"Skill 3"}
            value={traveler.equipped.supportSkill3.name}
            toggle={() => { setSelectingSupportSkill3(true) }}
          />

          {selectingSupportSkill4 &&
            <SelectionPane
              title="Support Skills"
              equipType="support skill 4"
              equipped={traveler.equipped.supportSkill4}
              toggle={() => setSelectingSupportSkill4(false)}
              options={skillData.support_skills}
            />
          }
          <ToggleSelect
            label={"Skill 4"}
            value={traveler.equipped.supportSkill4.name}
            toggle={() => { setSelectingSupportSkill4(true) }}
          />
        </div>
      }
    </>
  )
}
