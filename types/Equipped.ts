import type { Stats } from "./Stats"

export interface Equipment {
  id: number
  name: string
  stats: Stats
  effect: string
  type?: "Equipment"
}

export interface SupportSkill {
  id: number
  job: string
  name: string
  effect: string
  type?: "Support Skill"
}

export interface Equipped {
  weapons: {
    sword?: Equipment
    polearm?: Equipment
    dagger?: Equipment
    axe?: Equipment
    bow?: Equipment
    staff?: Equipment
  },
  shield: Equipment
  headgear: Equipment
  body_armor: Equipment
  accessory_1: Equipment
  accessory_2: Equipment
  supportSkill1: SupportSkill
  supportSkill2: SupportSkill
  supportSkill3: SupportSkill
  supportSkill4: SupportSkill
}
