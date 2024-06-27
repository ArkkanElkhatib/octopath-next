import { TravelersState } from "./travelers"
import equipmentData from "../data/octopath_traveler_1/equipment.json"
import skillsData from "../data/octopath_traveler_1/skills.json"
import { Traveler } from "@/types/Traveler"

export const getTravelerIndex = (state: TravelersState, game: string, name: string): number => {
  switch (game) {
    case "ot1":
      return state.ot1Travelers.findIndex((traveler) => traveler.name == name)
    case "ot2":
      return state.ot2Travelers.findIndex((traveler) => traveler.name == name)
  }
  return -1
}

export const getTravelerIndexBySlug = (state: TravelersState, game: string, slug: string): number => {
  switch (game) {
    case "ot1":
      return state.ot1Travelers.findIndex((traveler) => traveler.slug == slug)
    case "ot2":
      return state.ot2Travelers.findIndex((traveler) => traveler.slug == slug)
  }
  return -1
}

export const getTravelerByIndex = (state: TravelersState, game: string, index: number): Traveler | null => {
  switch (game) {
    case "ot1":
      return state.ot1Travelers[index]
    case "ot2":
      return state.ot2Travelers[index]
  }
  return null
}

export const equipSword = (state: TravelersState, game: string, travelerIndex: number, weaponName: string) => {
  const sword = equipmentData.weapons.swords.filter((weapon) =>
    weapon.name == weaponName)[0]

  if (sword) {
    switch (game) {
      case "ot1":
        if (state.ot1Travelers[travelerIndex].equipped.weapons.sword) {
          state.ot1Travelers[travelerIndex].equipped.weapons.sword = sword
        }
        break
      case "ot2":
        if (state.ot2Travelers[travelerIndex].equipped.weapons.sword) {
          state.ot2Travelers[travelerIndex].equipped.weapons.sword = sword
        }
        break
    }
  }
}

export const equipPolearm = (state: TravelersState, game: string, travelerIndex: number, weaponName: string) => {
  const polearm = equipmentData.weapons.polearms.filter((weapon) =>
    weapon.name == weaponName)[0]

  if (polearm) {
    switch (game) {
      case "ot1":
        if (state.ot1Travelers[travelerIndex].equipped.weapons.polearm) {
          state.ot1Travelers[travelerIndex].equipped.weapons.polearm = polearm
        }
        break
      case "ot2":
        if (state.ot2Travelers[travelerIndex].equipped.weapons.polearm) {
          state.ot2Travelers[travelerIndex].equipped.weapons.polearm = polearm
        }
        break
    }
  }
}

export const equipDagger = (state: TravelersState, game: string, travelerIndex: number, weaponName: string) => {
  const dagger = equipmentData.weapons.daggers.filter((weapon) =>
    weapon.name == weaponName)[0]

  if (dagger) {
    switch (game) {
      case "ot1":
        if (state.ot1Travelers[travelerIndex].equipped.weapons.dagger) {
          state.ot1Travelers[travelerIndex].equipped.weapons.dagger = dagger
        }
        break
      case "ot2":
        if (state.ot2Travelers[travelerIndex].equipped.weapons.dagger) {
          state.ot2Travelers[travelerIndex].equipped.weapons.dagger = dagger
        }
        break
    }
  }
}

export const equipAxe = (state: TravelersState, game: string, travelerIndex: number, weaponName: string) => {
  const axe = equipmentData.weapons.axes.filter((weapon) =>
    weapon.name == weaponName)[0]

  if (axe) {
    switch (game) {
      case "ot1":
        if (state.ot1Travelers[travelerIndex].equipped.weapons.axe) {
          state.ot1Travelers[travelerIndex].equipped.weapons.axe = axe
        }
        break
      case "ot2":
        if (state.ot2Travelers[travelerIndex].equipped.weapons.axe) {
          state.ot2Travelers[travelerIndex].equipped.weapons.axe = axe
        }
        break
    }
  }
}

export const equipBow = (state: TravelersState, game: string, travelerIndex: number, weaponName: string) => {
  const bow = equipmentData.weapons.bows.filter((weapon) =>
    weapon.name == weaponName)[0]

  if (bow) {
    switch (game) {
      case "ot1":
        if (state.ot1Travelers[travelerIndex].equipped.weapons.bow) {
          state.ot1Travelers[travelerIndex].equipped.weapons.bow = bow
        }
        break
      case "ot2":
        if (state.ot2Travelers[travelerIndex].equipped.weapons.bow) {
          state.ot2Travelers[travelerIndex].equipped.weapons.bow = bow
        }
        break
    }
  }
}

export const equipStaff = (state: TravelersState, game: string, travelerIndex: number, weaponName: string) => {
  const staff = equipmentData.weapons.staves.filter((weapon) =>
    weapon.name == weaponName)[0]

  if (staff) {
    switch (game) {
      case "ot1":
        if (state.ot1Travelers[travelerIndex].equipped.weapons.staff) {
          state.ot1Travelers[travelerIndex].equipped.weapons.staff = staff
        }
        break
      case "ot2":
        if (state.ot2Travelers[travelerIndex].equipped.weapons.staff) {
          state.ot2Travelers[travelerIndex].equipped.weapons.staff = staff
        }
        break
    }
  }
}

export const equipShield = (state: TravelersState, game: string, travelerIndex: number, armorName: string) => {
  const shield = equipmentData.shields.filter((armor) =>
    armor.name == armorName)[0]

  if (shield) {
    switch (game) {
      case "ot1":
        state.ot1Travelers[travelerIndex].equipped.shield = shield
        break
      case "ot2":
        state.ot2Travelers[travelerIndex].equipped.shield = shield
        break
    }
  }
}

export const equipHeadgear = (state: TravelersState, game: string, travelerIndex: number, armorName: string) => {
  const head = equipmentData.headgears.filter((armor) =>
    armor.name == armorName)[0]

  if (head) {
    switch (game) {
      case "ot1":
        state.ot1Travelers[travelerIndex].equipped.headgear = head
        break
      case "ot2":
        state.ot2Travelers[travelerIndex].equipped.headgear = head
        break
    }
  }
}

export const equipBodyArmor = (state: TravelersState, game: string, travelerIndex: number, armorName: string) => {
  const bodyArmor = equipmentData.body_armors.filter((armor) =>
    armor.name == armorName)[0]

  if (bodyArmor) {
    switch (game) {
      case "ot1":
        state.ot1Travelers[travelerIndex].equipped.body_armor = bodyArmor
        break
      case "ot2":
        state.ot2Travelers[travelerIndex].equipped.body_armor = bodyArmor
        break
    }
  }
}

export const equipAccessory1 = (state: TravelersState, game: string, travelerIndex: number, armorName: string) => {
  const accessory = equipmentData.accessories.filter((armor) =>
    armor.name == armorName)[0]

  if (accessory) {
    switch (game) {
      case "ot1":
        state.ot1Travelers[travelerIndex].equipped.accessory_1 = accessory
        break
      case "ot2":
        state.ot2Travelers[travelerIndex].equipped.accessory_1 = accessory
        break
    }
  }
}

export const equipAccessory2 = (state: TravelersState, game: string, travelerIndex: number, armorName: string) => {
  const accessory = equipmentData.accessories.filter((armor) =>
    armor.name == armorName)[0]

  if (accessory) {
    switch (game) {
      case "ot1":
        state.ot1Travelers[travelerIndex].equipped.accessory_2 = accessory
        break
      case "ot2":
        state.ot2Travelers[travelerIndex].equipped.accessory_2 = accessory
        break
    }
  }
}

export const equipSupportSkill = (state: TravelersState, game: string, travelerIndex: number, skillName: string, skillSlot: number) => {
  const supportSkill = skillsData.support_skills.filter((skill) =>
    skill.name == skillName)[0]

  if (supportSkill) {
    switch (game) {
      case "ot1":
        switch (skillSlot) {
          case 1:
            state.ot1Travelers[travelerIndex].equipped.supportSkill1 = supportSkill
            break
          case 2:
            state.ot1Travelers[travelerIndex].equipped.supportSkill2 = supportSkill
            break
          case 3:
            state.ot1Travelers[travelerIndex].equipped.supportSkill3 = supportSkill
            break
          case 4:
            state.ot1Travelers[travelerIndex].equipped.supportSkill4 = supportSkill
            break
        }
        break
      case "ot2":
        switch (skillSlot) {
          case 1:
            state.ot2Travelers[travelerIndex].equipped.supportSkill1 = supportSkill
            break
          case 2:
            state.ot2Travelers[travelerIndex].equipped.supportSkill2 = supportSkill
            break
          case 3:
            state.ot2Travelers[travelerIndex].equipped.supportSkill3 = supportSkill
            break
          case 4:
            state.ot2Travelers[travelerIndex].equipped.supportSkill4 = supportSkill
            break
        }
        break
    }
  }

}
